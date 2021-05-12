import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

function baseConfig () {
    return {
        input: 'src/main.ts',
        output: {
            name: 'qm-rollup-template',
            banner: '/* Author by zsh */',
            exports: 'named'
        },
        plugins: [
            terser(),
            typescript()
        ],
        external: []
    }
}

const umd = baseConfig()
umd.output.format = 'umd'
umd.output.file = 'dist/index.browser.js'
umd.plugins.push(
    nodeResolve({
        browser: true,
        preferBuiltins: false
    }),
    nodePolyfills()
)

const esm = baseConfig()
esm.output.format = 'esm'
esm.output.file = 'dist/index.esm.js'
esm.plugins.push(
    nodeResolve()
)

const cjs = baseConfig()
cjs.output.format = 'cjs'
cjs.output.file = 'dist/index.cjs.js'
cjs.plugins.push(
    nodeResolve(),
    commonjs(),
    json()
)

export default [
    umd,
    esm,
    cjs
]
