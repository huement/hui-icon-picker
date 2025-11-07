const terser = require('@rollup/plugin-terser').default;
const dts = require('rollup-plugin-dts').default;

/** @type {import('rollup').RollupOptions[]} */
module.exports = [
  {
    input: 'src/hui-icon-picker.js',
    output: [
      {
        file: 'dist/hui-icon-picker.js',
        format: 'umd',
        name: 'huiIconPicker',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'dist/hui-icon-picker.min.js',
        format: 'umd',
        name: 'huiIconPicker',
        exports: 'named',
        sourcemap: true,
        plugins: [terser()]
      },
      {
        file: 'www/hui-icon-picker.min.js',
        format: 'umd',
        name: 'huiIconPicker',
        exports: 'named',
        plugins: [terser()]
      }
    ]
  },
  {
    input: 'src/hui-icon-picker.d.ts',
    output: {
      file: 'dist/hui-icon-picker.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];
