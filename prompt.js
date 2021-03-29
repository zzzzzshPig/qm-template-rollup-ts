const prompt = require('prompt')
const shell = require('shelljs')
const package = require('./package.json')

let nextVersion = package.version.split('.')
nextVersion[nextVersion.length - 1] = Number(nextVersion[nextVersion.length - 1]) + 1
nextVersion = nextVersion.join('.')

async function init () {
    prompt.start()

    const _version = {
        properties: {
            version: {
                message: `当前版本${package.version}`,
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

    shell.echo('input git commit')
    const { commit } = await prompt.get(_commit)
    shell.exec(`git commit -m ${commit}`)
    shell.exec(`npm version ${version}`)
}

init()
