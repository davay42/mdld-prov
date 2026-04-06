[ex] <http://example.org#>

# Tutorial blog {=ex:tutorial_blog .prov:Entity .prov:Plan}

## Agents

[Derek] {=ex:derek .prov:Agent}

## Roles

[Illustrationist] {=ex:illustrationist .prov:Role}

## Activities

### Illustration activity {=ex:illustrationActivity .prov:Activity} 

Performed by [Derek] {+ex:derek ?prov:wasAssociatedWith}.

#### Association {=ex:illustration_association .prov:Association}

The [illustration] {+ex:illustrationActivity !prov:qualifiedAssociation} performed by [Derek] {+ex:derek ?prov:agent} acting as an [illustrationist] {+ex:illustrationist ?prov:hadRole} for the [blog] {+ex:tutorial_blog ?prov:hadPlan}.

