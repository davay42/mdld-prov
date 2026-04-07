[mdp] <https://mdld.js.org/prov/>
[owl] <http://www.w3.org/2002/07/owl#>

# Agent flow
=============

## Agent {=prov:Agent .Class label}

> An agent is something that bears some form of responsibility for an activity taking place, for the existence of an entity, or for another agent's activity. {prov:definition @en}

**Disjoint with:** [InstantaneousEvent] {+prov:InstantaneousEvent !owl:disjointWith}

## Person {=prov:Person .Class label}

Subclass of [Agent] {+prov:Agent ?subClassOf}

> Person agents are people. {prov:definition}

## Organization {=prov:Organization .Class label}

Subclass of [Agent] {+prov:Agent ?subClassOf}

> An organization is a social or legal institution such as a company, society, etc. {prov:definition}

## SoftwareAgent {=prov:SoftwareAgent .Class label}

Subclass of [Agent] {+prov:Agent ?subClassOf}

> A software agent is running software. {prov:definition}


