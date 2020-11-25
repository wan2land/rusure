#!/usr/bin/env node

import { createInterface } from 'readline'

(() => {
  if (process.env.RUSURE_SKIP === '1') {
    process.exit(0)
    return
  }

  process.stdout.write(`${process.argv[2] || 'Are you sure? (y/N)'} `)

  createInterface(process.stdin).on('line', (line) => {
    process.exit(line.trim().toLowerCase() === 'y' ? 0 : 1)
  })
})()
