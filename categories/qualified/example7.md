[ex] <http://example.org>

# Some activity {=ex:#a1 .prov:Activity}

# Some entity {=ex:#e1 .prov:Entity}

Created by that [activity] {+ex:#a1 ?prov:wasGeneratedBy}.

# Activity generated an entity {=ex:#e1Gen .prov:Generation}

Qualifies creation of the [entity] {+ex:#e1 !prov:qualifiedGeneration} by that [activity] {+ex:#a1 ?prov:activity} with this additional [influence] {+ex:#bar ?ex:#foo}.


