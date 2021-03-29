const prompt = require('prompt')
const shell = require('shelljs')
const fs = require('fs')
const pack = require('./package.json')

let nextVersion = pack.version.split('.')
nextVersion[nextVersion.length - 1] = Number(nextVersion[nextVersion.length - 1]) + 1
nextVersion = nextVersion.join('.')

async function init () {
    prompt.start()

    const _version = {
        properties: {
            version: {
                message: `当前版本${pack.version}`,
                default: nextVersion,
                required: true
            }
        }
    }

    const { version } = await prompt.get(_version)
    shell.echo('rollup building......')
    shell.exec('rollup -c')

    const _commit = {
        properties: {
            commit: {
                message: 'git commit log',
                default: `Update: ${version}`,
                required: true
            }
        }
    }

    shell.echo('input git commit message')
    const { commit } = await prompt.get(_commit)

    // 修改npm version
    fs.writeFileSync('./package.json', JSON.stringify({
        ...pack,
        version
    }, null, 4))

    shell.exec(`git commit -a -m "${commit}"`)
    shell.exec(`git tag -a ${version} -m "${version}"`)
}

init()
