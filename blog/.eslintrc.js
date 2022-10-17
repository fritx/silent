module.exports = {
  root: true,
  ignorePatterns: [
    // TODO: it is known that mermaid breaks es5
    'vendor/mermaid*',
    // lodash is probably okay for es5
    'vendor/lodash-4.17*',
    // jquery <= 1.12 is safe for es5
    // https://jquery.com/browser-support/
    'vendor/jquery-1.11*'
  ],
  overrides: [
    {
      files: 'vendor/**/*.js',
      extends: ['fritx/browser', 'fritx/es5-compat']
    },
    {
      files: 'vendor/blog.js',
      extends: ['fritx', 'fritx/browser', 'fritx/es5-compat'],
      globals: {
        mermaid: 'readonly',
        marked: 'readonly',
        hljs: 'readonly',
        Pace: 'readonly',
        _: 'readonly',
        $: 'readonly'
      },
      rules: {
        'no-mixed-operators': 0,
        'no-unused-vars': 0
      }
    }
  ]
}
