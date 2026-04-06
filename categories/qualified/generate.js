import { generate } from '../../../mdld-parse/src/generate.js'
import { Parser } from 'n3'
import { readFileSync, writeFileSync } from 'fs'

const decoder = new TextDecoder()
const parser = new Parser()

const file = decoder.decode(readFileSync('example8.ttl'))

const quads = parser.parse(file)

writeFileSync('example8.md', generate(quads, { ex: 'http://example.org' }))


