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

==============

## Summary

The agent flow establishes the fundamental concept of responsibility in provenance by modeling entities that bear accountability for activities, entities, or other agents' actions. This flow answers the essential question: "Who or what is responsible for this provenance element?"

Agents represent the active participants in provenance systems - the entities that can be held responsible for actions, decisions, and outcomes. This concept provides the human and organizational dimension that transforms provenance from mere technical tracking into meaningful accountability frameworks. By defining agents as responsible entities, PROV-O enables organizations to establish clear lines of authority, accountability, and attribution across complex systems.

The three specialized agent types provide comprehensive coverage of responsibility scenarios. Person agents capture individual human accountability, enabling personal attribution for actions and decisions. Organization agents model institutional responsibility, supporting corporate governance and organizational accountability. SoftwareAgent agents represent computational responsibility, enabling attribution to automated systems, algorithms, and software processes.

Together, these agent types enable sophisticated provenance scenarios across diverse domains. Research workflows can attribute data processing to individual researchers, research groups, and analysis software. Business processes can track responsibility across employees, departments, and automated systems. Regulatory compliance can establish clear accountability chains from individual actions up to organizational policies and automated enforcement mechanisms.

By providing a comprehensive framework for modeling responsibility, the agent flow becomes the foundation for accountability, auditability, and trust in provenance systems. It enables organizations to answer not just what happened, but who was responsible, supporting governance, compliance, and transparency initiatives across all operational contexts.


