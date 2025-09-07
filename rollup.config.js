import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

import pkg from './package.json'

// Use a safe global name for UMD builds (scoped package names are invalid as globals)
const umdName = 'SimpleCite'

export default [
  {
    input: 'src/index.js',
    output: {
      name: umdName,
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
      // Ensure CommonJS consumers can `require()` without `.default`
      { file: pkg.main, format: 'cjs', exports: 'default' },
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
