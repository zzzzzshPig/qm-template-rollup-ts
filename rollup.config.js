import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/index.js',
        format: 'esm',
        name: 'qm-rollup-template',
        banner: '/* Author by zsh */',
        sourcemap: true
    },
    plugins: [
        terser(),
        typescript(),
        nodeResolve()
    ],
    external: []
}
