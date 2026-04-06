[ex] <http://example.org#>

# Bar chart {=ex:bar_chart .prov:Entity}

Was derived from [regional aggregation] {+ex:aggregatedByRegions .prov:Entity ?prov:wasDerivedFrom}.

# Derivation {=ex:bar_chart_derivation .prov:Derivation}

Used [stats] {+ex:aggregatedByRegions ?prov:entity} during the [aggregation] {+ex:aggregating_activity ?prov:hadActivity} to [create] {+ex:generation_of_bar_chart ?prov:hadGeneration} the [chart] {+ex:bar_chart !prov:qualifiedDerivation} with a recorded [usage] {+ex:use_of_aggregatedData ?prov:hadUsage}.

