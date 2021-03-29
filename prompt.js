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
}

init()
