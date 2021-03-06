#!/usr/bin/env node

const program = require('commander')
const { list, add, checkout, status, remove } = require('./actions')

const bootstrap = require('./helper/bootstrap')
const { version } = require('./package.json')

program
  .version(version)
  .description('Fake package manager')

program
  .command('add', '')
  .action(add)

program
  .command('list', '')
  .action(list)

program
  .command('checkout <key>', '')
  .action(checkout)

program
  .command('remove [name]', '')
  .action(remove)

program
  .command('status', '')
  .action(status)

bootstrap()
  .then(() => program.parse(process.argv))
