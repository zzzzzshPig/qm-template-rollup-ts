const prompt = require('prompt')
const shell = require('shelljs')
const package = require('./package.json')

async function init () {
    prompt.start()

    const config = {
        version: {
            properties: {
                version: {
                    message: `当前版本${package.version}`,
                    required: true
                }
            }
        },
        commit: {
            properties: {
                commit: {
                    message: 'git commit log',
                    required: true
                }
            }
        }
    }

    const { version } = await prompt.get(config.version)
    shell.echo('rollup building......')
    shell.exec('rollup -c')

    shell.echo('input git commit')
    const { commit } = await prompt.get(config.commit)
    shell.exec(`git commit -m ${commit}`)

    shell.echo(`生成${version}版本`)
    shell.exec(`npm version ${version}`)
}

init()
