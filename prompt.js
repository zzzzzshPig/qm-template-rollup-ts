const prompt = require('prompt')
const shell = require('shelljs')

async function init () {
    prompt.start()

    const config = {
        properties: {
            version: {
                message: '版本号',
                required: true
            }
        }
    }

    const { version } = await prompt.get(config)
    shell.echo(`开始构建${version}版本`)
    shell.exec(`npm version ${version}`)
}

init()
