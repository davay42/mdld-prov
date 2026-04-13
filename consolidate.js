import { consolidate } from '../mdld-consolidate/index.js'

consolidate({
    indexFile: './index.md',
    outputFile: './prov-o.md'
}).catch(console.error)
