import { generate } from '../../mdld-parse/src/generate.js'
import { Parser } from 'n3'
import { readFileSync, writeFileSync } from 'fs'

const decoder = new TextDecoder()
const parser = new Parser()

const file = decoder.decode(readFileSync('example11.ttl'))

const quads = parser.parse(file)

writeFileSync('example11.md', generate(quads, { ex: 'http://example.org#' }))


