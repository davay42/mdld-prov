[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Revision flow
================

## wasRevisionOf {=prov:wasRevisionOf .owl:ObjectProperty label}

> A revision is a derivation that revises an entity into a revised version. {comment @en}

Connects one [entity] {+prov:Entity ?domain} to [another] {+prov:Entity ?range} that is a revised version of it.

May be qualified by [qualifiedRevision] {+prov:qualifiedRevision ?prov:qualifiedForm} with a [Revision] {+prov:Revision ?prov:qualifiedForm}.

Sub-property of [wasDerivedFrom] {+prov:wasDerivedFrom ?subPropertyOf}.

Inverse: [hadRevision] {prov:inverse}

## qualifiedRevision {=prov:qualifiedRevision owl:ObjectProperty label}

> If this Entity prov:wasRevisionOf Entity :e, then it can qualify how it was revised using prov:qualifiedRevision [ a prov:Revision;  prov:entity :e; :foo :bar ]. {comment @en}

Adds a [Revision] {+prov:Revision ?range ?prov:sharesDefinitionWith} to an [entity] {+prov:Entity ?domain}.

A qualified version of [wasRevisionOf] {+prov:wasRevisionOf ?prov:unqualifiedForm}.

Sub-property: [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}

Inverse: [revisedEntity] {prov:inverse}

## Revision {=prov:Revision .Class label}

Sub-class of [Derivation] {+prov:Derivation ?subClassOf}. 

> A revision is a derivation for which the resulting entity is a revised version of some original. The implication here is that the resulting entity contains substantial content from the original. Revision is a particular case of derivation. {prov:definition @en}

> An instance of prov:Revision provides additional descriptions about the binary prov:wasRevisionOf relation from some newer prov:Entity to an earlier prov:Entity. For example, :draft_2 prov:wasRevisionOf :draft_1; prov:qualifiedRevision [ a prov:Revision; prov:entity :draft_1; :foo :bar ]. {comment @en}

==============

## Summary

The revision flow captures the versioning relationship between entities, modeling how one entity becomes an updated version of another. This flow answers the essential question: "What is this entity a revision of, and what original content does it preserve?"

Revision represents a specialized derivation where the new entity contains substantial content from its original while incorporating updates or corrections. This creates clear version chains that enable tracking document evolution, software releases, and content refinement across diverse workflows. The flow provides the backbone for understanding how entities evolve through controlled updates rather than complete transformations.

The wasRevisionOf relationship establishes precise version lineage that supports sophisticated analysis of content evolution, change tracking, and version management. The bidirectional properties enable flexible querying - both "What is this a revision of?" and "What revisions exist for this entity?" - while qualified Revision classes enrich these relationships with contextual detail about the revision process and circumstances.

By capturing structured version relationships with contextual enhancement, the flow becomes essential for document management, software versioning, and content governance. It enables organizations to maintain clear audit trails, support rollback capabilities, and understand content evolution through precise revision tracking.

