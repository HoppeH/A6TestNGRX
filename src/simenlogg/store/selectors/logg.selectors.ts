import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromLoggs from '../reducers';

import { Logg } from '../../models/logg.models';

export const getLoggEntities = createSelector(
  fromLoggs.getLoggsState,
  (state: fromLoggs.LoggState) => state.entities
);

export const getSelectedLogg = createSelector(
  getLoggEntities,
  fromRoot.getRouterLoggId,
  (entities, router): Logg => {
    console.log(router && entities[router]);
    return router && entities[router];
  }
);
