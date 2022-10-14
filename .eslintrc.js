module.exports = {
  extends: 'standard',
  plugins: ['prefer-let'],
  rules: {
    'prefer-let/prefer-let': 2,
    'prefer-const': 0,
    'space-before-function-paren': ['error', { 'named': 'never' }],
    'arrow-parens': ['error', 'as-needed'],
    'no-mixed-operators': 0,
    'multiline-ternary': 0,
    'no-unused-vars': 0,
    'dot-notation': 0,
    'no-ex-assign': 0,
    'comma-dangle': 0,
    'quote-props': 0,
    'camelcase': 0,
  }
}
