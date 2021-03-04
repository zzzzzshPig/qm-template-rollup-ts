import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/index.js',
        format: 'esm',
        name: 'qm-error-watch',
        banner: '/* Author by zsh */',
        sourcemap: true
    },
    plugins: [
        terser(),
        typescript()
    ],
    external: ['@sentry/vue', '@sentry/tracing']
}