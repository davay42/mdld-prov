[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Primary Source flow
=======================

## hadPrimarySource {=prov:hadPrimarySource .owl:ObjectProperty label}

Connects two [entities] {+prov:Entity ?domain ?range} with a source relation that is a sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Has a qualified form - [qualifiedPrimarySource] {+prov:qualifiedPrimarySource ?prov:qualifiedForm} that creates an explicit [PrimarySource] {+prov:PrimarySource ?prov:qualifiedForm} relation.

Inverse: [wasPrimarySourceOf] {prov:inverse}

## qualifiedPrimarySource {=prov:qualifiedPrimarySource owl:ObjectProperty label}

> If this Entity prov:hadPrimarySource Entity :e, then it can qualify how using prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :e; :foo :bar ]. {comment @en}

Adds a [PrimarySource] {+prov:PrimarySource ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [hadPrimarySource] {+prov:hadPrimarySource ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [qualifiedSourceOf] {prov:inverse}

## PrimarySource {=prov:PrimarySource .Class label}

Sub-class of [Derivation] {+prov:Derivation ?subClassOf}. 

> An instance of prov:PrimarySource provides additional descriptions about the binary prov:hadPrimarySource relation from some secondary prov:Entity to an earlier, primary prov:Entity. For example, :blog prov:hadPrimarySource :newsArticle; prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :newsArticle; :foo :bar ] . {comment @en}

``` {prov:definition @en}
A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.

Because of the directness of primary sources, they 'speak for themselves' in ways that cannot be captured through the filter of secondary sources. As such, it is important for secondary sources to reference those primary sources from which they were derived, so that their reliability can be investigated.

A primary source relation is a particular case of derivation of secondary materials from their primary sources. It is recognized that the determination of primary sources can be up to interpretation, and should be done according to conventions accepted within the application's domain.
```

==============

## Summary

The primary source flow captures the authoritative relationship between entities, modeling how secondary works derive from original, firsthand sources. This flow answers the essential question: "What is the primary source for this entity, and what direct experience does it represent?"

Primary source represents a specialized derivation where the source entity was created by someone with direct experience and knowledge of the topic, without benefit from hindsight. This creates clear authority chains that enable tracking research provenance, journalistic sourcing, and academic evidence across diverse workflows. The flow provides the backbone for understanding how knowledge flows from original observations to derived works.

The hadPrimarySource relationship establishes precise authority lineage that supports sophisticated analysis of source reliability, evidence tracking, and research validation. The bidirectional properties enable flexible querying - both "What is the primary source for this?" and "What works derive from this source?" - while qualified PrimarySource classes enrich these relationships with contextual detail about the source determination process.

By capturing structured authority relationships with contextual enhancement, the flow becomes essential for research integrity, journalistic standards, and academic rigor. It enables organizations to maintain clear evidence trails, support source validation, and understand knowledge provenance through precise primary source tracking.

