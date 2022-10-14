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
      extends: '../.eslintrc.es5.js',
    },
    {
      files: 'vendor/blog.js',
      extends: [
        '../.eslintrc.js',
        '../.eslintrc.es5.js'
      ],
      globals: {
        mermaid: true,
        marked: true,
        hljs: true,
        Pace: true,
        _: true,
        $: true
      },
    }
  ]
}
