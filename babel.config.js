module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: 'auto',
        // Do not inject polyfills into library build; let consumers choose polyfills
        // useBuiltIns: 'usage',
        shippedProposals: true
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true
      }
    ],
    '@babel/plugin-proposal-optional-chaining'
  ]
}
