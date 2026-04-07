[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Association flow
======================

## wasAssociatedWith {=prov:wasAssociatedWith .owl:ObjectProperty label}

> An prov:Agent that had some (unspecified) responsibility for the occurrence of this prov:Activity. {comment @en}

Adds an [agent] {+prov:Agent ?range} to an [activity] {+prov:Activity ?domain}.

May be qualified by [qualifiedAssociation] {+prov:qualifiedAssociation ?prov:qualifiedForm} with [Association] {+prov:Association ?prov:qualifiedForm} attached.

Sub-property: [wasAssociateFor] {+prov:wasAssociateFor ?subPropertyOf}

Inverse: [wasAssociateFor] {prov:inverse}

## qualifiedAssociation {=prov:qualifiedAssociation .owl:ObjectProperty label}

> If this Activity prov:wasAssociatedWith Agent :ag, then it can qualify the Association using prov:qualifiedAssociation [ a prov:Association;  prov:agent :ag; :foo :bar ]. {comment @en}

As a qualified form of [wasAssociatedWith] {+prov:wasAssociatedWith ?prov:unqualifiedForm} it describes that an activity was [associated] {+prov:Association ?range ?prov:sharesDefinitionWith} with an [activity] {+prov:Activity ?domain}.

Sub-property of [qualifiedInfluence] {+prov:qualifiedInfluence ?subPropertyOf}.

Inverse: [qualifiedAssociationOf] {prov:inverse}.

## Association {=prov:Association .Class label}

Sub-class of [AgentInfluence] {+prov:AgentInfluence ?subClassOf}

> An activity association is an assignment of responsibility to an agent for an activity, indicating that the agent had a role in the activity. It further allows for a plan to be specified, which is the plan intended by the agent to achieve some goals in the context of this activity. {prov:definition}

> An instance of prov:Association provides additional descriptions about the binary prov:wasAssociatedWith relation from an prov:Activity to some prov:Agent that had some responsiblity for it. For example, :baking prov:wasAssociatedWith :baker; prov:qualifiedAssociation [ a prov:Association; prov:agent :baker; :foo :bar ]. {comment @en}

## hadPlan {=prov:hadPlan .owl:ObjectProperty label}

> The _optional_ Plan adopted by an Agent in Association with some Activity. Plan specifications are out of the scope of this specification. {comment @en}

Is used to connect [Association] {+prov:Association ?domain} to a [Plan] {+prov:Plan ?range ?prov:sharesDefinitionWith}.

Inverse: [wasPlanOf] {prov:inverse}

## Plan {=prov:Plan .Class label}

Sub-class of [Entity] {+prov:Entity ?subClassOf}

> A plan is an entity that represents a set of actions or steps intended by one or more agents to achieve some goals. {prov:definition @en}

> There exist no prescriptive requirement on the nature of plans, their representation, the actions or steps they consist of, or their intended goals. Since plans may evolve over time, it may become necessary to track their provenance, so plans themselves are entities. Representing the plan explicitly in the provenance can be useful for various tasks: for example, to validate the execution as represented in the provenance record, to manage expectation failures, or to provide explanations. {comment @en}

## hadRole {=prov:hadRole .owl:ObjectProperty label}

> The _optional_ Role that an Entity assumed in the context of an Activity. For example, :baking prov:used :spoon; prov:qualified [ a prov:Usage; prov:entity :spoon; prov:hadRole roles:mixing_implement ]. {comment @en}

It describes that an entity assumed a [Role] {+prov:Role ?range ?prov:sharesDefinitionWith} during an [Influence] {+prov:Influence ?domain} or [Association] {+prov:Association ?domain} or [InstantaneousEvent] {+prov:InstantaneousEvent ?domain} in general.

Inverse: [wasRoleIn] {prov:inverse}.

## Role {=prov:Role .Class label}

> A role is the function of an entity or agent with respect to an activity, in the context of a usage, generation, invalidation, association, start, and end. {prov:definition}

See also [hadRole] {+prov:hadRole ?seeAlso}.

