[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Agents, responsibility and influence {=mdp:components#agents-responsibility .mdp:Component label}

![](./component3.png)

![](./Component3b.png)

[Agent flow](./agent.md)
[Association flow](./association.md)
[Responsibility flow](./responsibility.md)
[Attribution flow](./attribution.md)
[Influence flow](./influence.md)

## Summary

The PROV-O Agents, Responsibility and Influence component models the "who" and "why" of provenance through a comprehensive framework of agent types, responsibility relationships, and influence mechanisms. The component is organized into clear flows that establish agent hierarchies and their various modes of influence.

**Flow Architecture:**
Each agent-related flow follows the provenance pattern of binary relations, qualified forms, and influence classes, creating consistent and predictable modeling approaches.

**Core Flows:**

**1. Agent Flow** - Foundation of all provenance actors
- **Agent Hierarchy**: `Agent` → `Person`, `Organization`, `SoftwareAgent`
- Establishes the fundamental types of provenance actors
- Provides the "who" for all provenance statements
- Disjoint from `InstantaneousEvent` to maintain clear semantic boundaries

**2. Association Flow** - Agent participation in activities
- `wasAssociatedWith` → `qualifiedAssociation` → `Association`
- **Enhancement Properties**: `hadPlan` → `Plan`, `hadRole` → `Role`
- Models how agents participate in and take responsibility for activities
- Supports plan-based activity execution and role-based participation
- Example: Baker associated with baking activity using recipe plan

**3. Responsibility Flow** - Hierarchical accountability
- `actedOnBehalfOf` → `qualifiedDelegation` → `Delegation`
- Models chains of responsibility and authority delegation
- Supports multi-level accountability (student → supervisor → department → university)
- Maintains responsibility while allowing task delegation
- Sub-property of `wasInfluencedBy` for influence framework integration

**4. Attribution Flow** - Entity-to-agent responsibility
- `wasAttributedTo` → `qualifiedAttribution` → `Attribution`
- Ascribes entities to agents when the specific activity is unknown or irrelevant
- Provides direct entity-agent responsibility links
- Useful for authorship and ownership attribution
- Sub-property of `qualifiedInfluence`

**5. Influence Flow** - Cross-cutting influence framework
- `wasInfluencedBy` → `qualifiedInfluence` → `Influence`
- **Specialized Influence Types**: `ActivityInfluence`, `AgentInfluence`, `EntityInfluence`
- **Supporting Properties**: `influencer`, `influenced`, `activity`, `agent`, `entity`
- Provides the foundational influence mechanism for all other flows
- Connects agents, entities, and activities in flexible influence relationships

**Key Relationships:**
```
Influence (broadest)
├── ActivityInfluence (activity-based influence)
├── AgentInfluence (agent-based influence)
│   ├── Association (activity participation)
│   ├── Delegation (responsibility chains)
│   └── Attribution (entity responsibility)
└── EntityInfluence (entity-based influence)
```

**Benefits of Flow Organization:**
- Clear separation of agent responsibility concepts
- Consistent binary→qualified→influence patterns
- Hierarchical responsibility modeling
- Cross-cutting influence framework
- Comprehensive agent type support
- Flexible role and plan integration

