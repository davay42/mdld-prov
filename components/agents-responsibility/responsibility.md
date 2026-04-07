[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Responsibility flow
======================

## actedOnBehalfOf {=prov:actedOnBehalfOf .owl:ObjectProperty label}

> An object property to express the accountability of an agent towards another agent. The subordinate agent acted on behalf of the responsible agent in an actual activity {comment @en}

Connects one [Agent] {+prov:Agent ?domain} to another [Agent] {+prov:Agent ?range} with a [delegation] {+prov:Delegation ?qualifiedForm} relation that is a sub-property of the [wasInfluencedBy] {+prov:wasInfluencedBy ?subPropertyOf} property.

It's qualified form is the [qualifiedDelegation] {+prov:qualifiedDelegation ?qualifiedForm} property.

Inverse: not defined explicitly, rather a recommended name for use in additional ontologies if necessary - [hadDelegate] {prov:inverse}.

## qualifiedDelegation {=prov:qualifiedDelegation .owl:ObjectProperty label}

> If this Agent prov:actedOnBehalfOf Agent :ag, then it can qualify how with prov:qualifiedResponsibility [ a prov:Responsibility;  prov:agent :ag; :foo :bar ]. {comment @en}

Connects an [agent] {+prov:Agent ?domain} to a [delegation] {+prov:Delegation ?range ?prov:sharesDefinitionWith}.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedDelegationOf] {prov:inverse}

## Delegation {=prov:Delegation .Class label}

Sub-class of [AgentInfluence] {+prov:AgentInfluence ?subClassOf}

> An instance of prov:Delegation provides additional descriptions about the binary prov:actedOnBehalfOf relation from a performing prov:Agent to some prov:Agent for whom it was performed. For example, :mixing prov:wasAssociatedWith :toddler . :toddler prov:actedOnBehalfOf :mother; prov:qualifiedDelegation [ a prov:Delegation; prov:entity :mother; :foo :bar ]. {comment @en}

``` {prov:definition @en}
Delegation is the assignment of authority and responsibility to an agent (by itself or by another agent) to carry out a specific activity as a delegate or representative, while the agent it acts on behalf of retains some responsibility for the outcome of the delegated work.

For example, a student acted on behalf of his supervisor, who acted on behalf of the department chair, who acted on behalf of the university; all those agents are responsible in some way for the activity that took place but we do not say explicitly who bears responsibility and to what degree.
```


