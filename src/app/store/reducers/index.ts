import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../app.state';
import * as fromTarrifs from './tarrif.reducer';






export interface State extends fromRoot.State {
  tarrifs: fromTarrifs.TarrifState;
}


//Selectors
const getTarrifFeatureState = createFeatureSelector<fromTarrifs.TarrifState>('tarrifs');


// Tarrif Selectors
export const getTarrifByKwh = createSelector( getTarrifFeatureState, state => state.tarrifsByKwh);
export const getTarrifByKwhError = createSelector(getTarrifFeatureState, state => state.error);

export const reducers = {
  tarrifs: fromTarrifs.reducer,
};
