let prompts = require('prompts')
let shell = require('shelljs')
let { resolve } = require('path')

let beforeCreate = async dest => {
  if (!shell.test('-e', dest)) {
    shell.mkdir('-p', dest)
    return
  }
  if (!shell.test('-d', dest)) {
    throw new Error('dest should be a directory')
  }
  let { confirm } = await prompts({
    type: 'text',
    name: 'confirm',
    message: 'dest already exists, are you sure to apply onto it? (Y/n)'
  })
  if (confirm !== 'Y') {
    throw new Error('warn: you cancelled')
  }
}

exports.create = async _dest => {
  if (!_dest) {
    throw new Error('warn: usage:\n$ npm create silent <dest>  # opt.1\n$ silent create <dest>  # opt.2')
  }
  let dest = resolve(process.cwd(), _dest)
  await beforeCreate(dest)
  let blogDir = resolve(__dirname, 'blog')
  console.log('copying', blogDir)
  console.log('  =>', dest)
  shell.cp('-rL', blogDir + '/*', dest)
}
