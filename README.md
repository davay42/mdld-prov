# mdld-prov

A complete reconstruction of the W3C PROV-O provenance ontology in MDLD format.

## Overview

This project presents the W3C PROV-O standard reimagined for modern provenance workflows, featuring:

- **Complete PROV-O Implementation** - All classes, properties, and relationships faithfully reconstructed
- **Flow-Based Organization** - Components organized by conceptual flows for better understanding
- **Rich Documentation** - Narrative summaries explaining purpose and use cases
- **Real-World Examples** - 11 practical scenarios demonstrating provenance patterns

## Quick Start

**Start here:** [PROV-O MDLD Catalog](./index.md)

## Project Structure

### Components (6 modules)
- **[Entities and Activities](./components/entities-activities/index.md)** - Core building blocks and lifecycle management
- **[Agents, Responsibility and Influence](./components/agents-responsibility/index.md)** - Accountability and authority structures  
- **[Derivations](./components/derivations/index.md)** - Entity transformation and lineage tracking
- **[Collections](./components/collections/index.md)** - Dynamic membership and provenance of groups
- **[Bundles](./components/bundles/index.md)** - Nested provenance and provenance-of-provenance
- **[Alternate](./components/alternate/index.md)** - Multiple perspectives and specialization relationships

### Categories (3 learning levels)
- **[Starting Point Terms](./categories/starting-point/index.md)** - Core provenance concepts for immediate use
- **[Qualified Terms](./categories/qualified/index.md)** - Enhanced relationships with contextual detail
- **[Expanded Terms](./categories/expanded/index.md)** - Advanced patterns for complex scenarios

### Examples (11 scenarios)
Real-world provenance applications including data journalism, scientific workflows, and collaborative authorship.

[11 examples](./examples/index.md)

## Key Features

- **35 Entities, 16 Activities, 16 Agents** - Comprehensive instance data for validation
- **Flow-Based Summaries** - Each component includes narrative explanations of conceptual flows
- **Progressive Learning** - Categories organized from basic to advanced concepts
- **Modern Tooling** - Built with MDLD for enhanced readability and validation

## Clone with Intelligraphs web-app

Clone the repo via [Intelligraphs app](https://app.intelligraphs.com/#/?clone=https://github.com/davay42/mdld-prov.git)

## Navigate with IG-CLI in terminal

```bash
mkdir mdld-prov
cd mdld-prov
git clone https://github.com/davay42/mdld-prov.git 
curl -O https://app.intelligraphs.com/ig-cli.js
chmod +x ig-cli.js
mv ig-cli.js /usr/local/bin/ig-cli
ig-cli --help
ig-cli stats
```

## Technical Notes

This reconstruction maintains full compatibility with the W3C PROV-O standard while adapting it for modern MDLD workflows. Minor adaptations include:
- Changed `owl:Class` to `rdfs:Class` for better MDLD integration
- Excluded `dm` and `n` links for cleaner documentation
- Enhanced with narrative summaries and flow-based organization
