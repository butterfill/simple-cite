import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime'
        // runtimeHelpers: true
      }),
      resolve({ jsnext: true, main: true, browser: true }),
      commonjs()
    ]
  },
  {
    input: 'src/index.js',
    external: id =>
      /^(@babel\/runtime|core-js)/.test(id) || ['citeproc'].includes(id),
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime'
        // runtimeHelpers: true
      })
    ]
  }
]
