import * as React from 'react';
import { Card, CardBody } from '@patternfly/react-core';

import { RichSpanData } from 'types/TracingInfo';
import { SpanTable } from './SpanTable';
import { FilterSelected, StatefulFilters } from 'components/Filters/StatefulFilters';
import { spanFilters } from './Filters';
import { runFilters } from 'components/FilterList/FilterHelper';
import { ActiveFiltersInfo } from 'types/Filters';
import { TraceLabels } from './TraceLabels';

interface SpanDetailsProps {
  cluster?: string;
  externalURL?: string;
  items: RichSpanData[];
  namespace: string;
  target: string;
  traceID: string;
}

export const SpanDetails: React.FC<SpanDetailsProps> = (props: SpanDetailsProps) => {
  const filters = spanFilters(props.items);

  const [activeFilters, setActiveFilters] = React.useState<ActiveFiltersInfo>(FilterSelected.init(filters));
  const filteredItems = runFilters(props.items, filters, activeFilters);

  return (
    <Card isCompact>
      <CardBody>
        <StatefulFilters initialFilters={filters} onFilterChange={active => setActiveFilters(active)}>
          <TraceLabels
            spans={props.items}
            filteredSpans={activeFilters.filters.length > 0 ? filteredItems : undefined}
            oneline={true}
          />
        </StatefulFilters>

        {props.traceID && (
          <SpanTable
            items={filteredItems}
            namespace={props.namespace}
            externalURL={props.externalURL}
            cluster={props.cluster}
            traceID={props.traceID}
          />
        )}
      </CardBody>
    </Card>
  );
};
