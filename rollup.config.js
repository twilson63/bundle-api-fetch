import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

import pkg from './package.json'

export default [{
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'esm' },
    { file: pkg.main, format: 'umd', name: pkg.name }
  ],
  plugins: [
    resolve()
  ]
}, {
  input: 'test/src/main.js',
  output: {
    file: 'test/public/bundle.js',
    format: 'iife',
    name: 'ApiFetchBundle' 
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.API': '"https://api-example.com"'
    })
  ]
}]
