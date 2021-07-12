import {TarrifDto} from '../../shared/models/tarrif.model';
import { TarrifActionTypes, TarrifActions } from '../actions/tarrif.actions';


// State for this feature (Tarrif)
export interface TarrifState {
  tarrifsByKwh: TarrifDto[];
  error: string;
}

const initialState: TarrifState = {
  tarrifsByKwh: [],
  error: ''
};

export function reducer(state = initialState, action: TarrifActions): TarrifState {

  switch (action.type) {
   
    case TarrifActionTypes.LoadByKwhSuccess:
            return {
              ...state,
              tarrifsByKwh: action.payload,
              error: ''
            };
    case TarrifActionTypes.LoadByKwhFail:
            return {
              ...state,
              tarrifsByKwh: [],
              error: action.payload
            };

      default:
        return state;
    }
  }
