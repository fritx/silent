module.exports = {
  extends: [
    'plugin:es5/no-es2015',
    'plugin:es5/no-es2016'
  ],
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    browser: true
  },
  rules: {
    'prefer-let/prefer-let': 0,
    'prefer-const': 0,
    'no-var': 0,
    'object-shorthand': [2, 'never'],
    'comma-dangle': [2, 'never'],
  }
}
