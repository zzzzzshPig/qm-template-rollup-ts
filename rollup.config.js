import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

function baseConfig () {
    return {
        input: 'src/main.ts',
        output: {
            name: 'qm-rollup-template',
            banner: '/* Author by zsh */'
        },
        plugins: [
            terser(),
            typescript(),
            nodeResolve()
        ],
        external: []
    }
}

const umd = baseConfig()
umd.output.format = 'umd'
umd.output.file = 'dist/index.js'

const esm = baseConfig()
esm.output.format = 'esm'
esm.output.file = 'dist/index.esm.js'

export default [
    umd,
    esm
]
