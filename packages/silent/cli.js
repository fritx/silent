#!/usr/bin/env node
let silent = require('.')
let argv = process.argv

;(async () => {
  let [action, ...args] = argv.slice(2)
  if (argv[1].endsWith('create-silent')) {
    action = 'create'
    args = argv.slice(2)
  }

  let allowList = ['create']
  if (!allowList.includes(action)) {
    throw new Error(`warn: '${action}' action not found.\nvisit https://github.com/fritx/silent`)
  }

  await silent.create(...args)
  console.log(`silent-${action} completed`)
})().catch(err => {
  if (/\bverbose:/.test(err)) {
    return
  }
  if (/\bwarn:/.test(err)) {
    console.error(err.message)
    return
  }
  throw err
})
