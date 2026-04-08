[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Influence flow
=================

## wasInfluencedBy {=prov:wasInfluencedBy .owl:ObjectProperty label}

> Because prov:wasInfluencedBy is a broad relation, its more specific subproperties (e.g. prov:wasInformedBy, prov:actedOnBehalfOf, prov:wasEndedBy, etc.) should be used when applicable. {comment @en}

It describes that an entity was influenced by another entity.

This is a broad relation of [Influence] {+prov:Influence ?prov:qualifiedForm ?prov:sharesDefinitionWith} that can connect any of [agents] {+prov:Agent ?domain ?range}, [entities] {+prov:Entity ?domain ?range} or [activities] {+prov:Activity ?domain ?range} to each other. 

Can be qualified with [qualifiedInfluence] {+prov:qualifiedInfluence ?prov:qualifiedForm}.

Inverse: [influenced] {prov:inverse} is one of few that are [defined] {+prov:influenced ?prov:inverse}.

``` {prov:editorialNote @en}
The sub-properties of prov:wasInfluencedBy can be elaborated in more detail using the Qualification Pattern. For example, the binary relation :baking prov:used :spoon can be qualified by asserting :baking prov:qualifiedUsage [ a prov:Usage; prov:entity :spoon; prov:atLocation :kitchen ] .

Subproperties of prov:wasInfluencedBy may also be asserted directly without being qualified.

prov:wasInfluencedBy should not be used without also using one of its subproperties. 
```

## ActivityInfluence** {=prov:ActivityInfluence.Class label}

Sub-class of [Influence] {+prov:Influence ?subClassOf}

> ActivityInfluence provides additional descriptions of an Activity's binary influence upon any other kind of resource. Instances of ActivityInfluence use the prov:activity property to cite the influencing Activity. {comment @en}

> It is not recommended that the type ActivityInfluence be asserted without also asserting one of its more specific subclasses. {comment @en}

Disjoint with [EntityInfluence] {+prov:EntityInfluence ?owl:disjointWith}.

See also: [activity] {+prov:activity ?seeAlso}

> ActivitiyInfluence is the capacity of an activity to have an effect on the character, development, or behavior of another by means of generation, invalidation, communication, or other. {prov:editorsDefinition @en}

## AgentInfluence {=prov:AgentInfluence .Class label}

Sub-class of [Influence] {+prov:Influence ?subClassOf}

> AgentInfluence provides additional descriptions of an Agent's binary influence upon any other kind of resource. Instances of AgentInfluence use the prov:agent property to cite the influencing Agent. {comment @en}

> AgentInfluence is the capacity of an agent to have an effect on the character, development, or behavior of another by means of attribution, association, delegation, or other. {prov:editorsDefinition @en}

## EntityInfluence {=prov:EntityInfluence .Class label}

Sub-class of [Influence] {+prov:Influence ?subClassOf}.

> EntityInfluence is the capacity of an entity to have an effect on the character, development, or behavior of another by means of usage, start, end, derivation, or other. {prov:editorsDefinition @en}

> EntityInfluence provides additional descriptions of an Entity's binary influence upon any other kind of resource. Instances of EntityInfluence use the prov:entity property to cite the influencing Entity. {comment @en}

> It is not recommended that the type EntityInfluence be asserted without also asserting one of its more specific subclasses. {comment @en}


## influenced {=prov:influenced .owl:ObjectProperty label}

Inverse: [wasInfluencedBy] {prov:inverse} with a defined [inverse] {+prov:wasInfluencedBy ?owl:inverseOf}.

See [Influence] {+prov:Influence ?prov:sharesDefinitionWith}

## influencer {=prov:influencer .owl:ObjectProperty label}

> Subproperties of prov:influencer are used to cite the object of an unqualified PROV-O triple whose predicate is a subproperty of prov:wasInfluencedBy (e.g. prov:used, prov:wasGeneratedBy). prov:influencer is used much like rdf:object is used. {comment @en}

Clarifies an [Influence] {+prov:Influence ?domain} with what was that [thing] {+owl:Thing ?range} that made the influence.

Inverse: [hadInfluence] {prov:inverse}.

> This property and its subproperties are used in the same way as the rdf:object property, i.e. to reference the object of an unqualified prov:wasInfluencedBy or prov:influenced triple. {prov:editorialNote @en}

> This property is used as part of the qualified influence pattern. Subclasses of prov:Influence use these subproperties to reference the resource (Entity, Agent, or Activity) whose influence is being qualified. {prov:editorialNote @en}


## activity {=prov:activity .owl:ObjectProperty label}

Applies to [Activities] {+prov:Activity ?range} as a sub-property of [influencer] {+prov:influencer ?subPropertyOf} - it references an [Activity] that influenced a resource. 

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:activity property references an prov:Activity which influenced a resource. This property applies to an prov:ActivityInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}

Inverse: [activityOfInfluence] {prov:inverse}

## agent {=prov:agent .owl:ObjectProperty label}

Points to [Agents] {+prov:Agent ?range} from the [AgentInfluence] {+prov:AgentInfluence ?domain} qualified relations that are sub-properties of the [influencer] {+prov:influencer ?subPropertyOf} property.

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:agent property references an prov:Agent which influenced a resource. This property applies to an prov:AgentInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}

Inverse: [agentOfInfluence] {prov:inverse}


## entity {=prov:entity .owl:ObjectProperty label}

A qualified [EntityInfluence] {+prov:EntityInfluence ?domain} uses this relation to point to an [entity] {+prov:Entity} that influences an entity/agent/activity with some [influence] {+prov:influencer ?subPropertyOf}.

Inverse: [entityOfInfluence] {prov:inverse}

> This property behaves in spirit like rdf:object; it references the object of a prov:wasInfluencedBy triple. {prov:editorialNote @en}

> The prov:entity property references an prov:Entity which influenced a resource. This property applies to an prov:EntityInfluence, which is given by a subproperty of prov:qualifiedInfluence from the influenced prov:Entity, prov:Activity or prov:Agent. {prov:editorsDefinition @en}

==============

## Summary

The influence flow captures the most fundamental and universal relationship in PROV-O, modeling how any entity, activity, or agent can affect another through any mechanism. This flow answers the essential question: "What influenced this, and through what capacity?"

Influence represents the broadest concept in provenance - the capacity for one element to have an effect on another through any means, whether direct or indirect, specific or general. This universal relationship serves as the conceptual umbrella that unifies all other provenance patterns under a common framework. While specific relations like usage, generation, or delegation capture precise mechanisms, influence provides the flexible foundation for modeling complex, multi-faceted relationships that may not fit neatly into specialized categories.

The specialized influence classes provide structured mechanisms for different influence types. ActivityInfluence captures how activities affect resources through generation, invalidation, or communication. AgentInfluence models how agents exert influence through attribution, association, or delegation. EntityInfluence represents how entities influence others through usage, derivation, or other entity-based mechanisms. This specialization enables precise modeling while maintaining the conceptual unity of influence as the fundamental relationship.

The wasInfluencedBy relationship creates comprehensive effect chains that support sophisticated analysis of system-wide impact, causal propagation, and complex interdependencies. The bidirectional properties enable flexible querying across all provenance domains - both "What influenced this?" and "What does this influence?" - while the specialized influence classes provide contextual detail about the nature and mechanisms of influence.

By providing the most universal relationship with specialized subtypes, the influence flow becomes the foundation for comprehensive provenance analysis, system understanding, and impact assessment. It enables organizations to capture the full spectrum of relationships in complex systems while maintaining the ability to specialize when needed, making influence both the most generic and most specific mechanism for provenance modeling.
