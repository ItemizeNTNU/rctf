module.exports = {
  env: {
    es6: true
  },
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'block-like', next: 'export' }],
    'no-void': [
      'error',
      {
        allowAsStatement: true
      }
    ]
  }
}
