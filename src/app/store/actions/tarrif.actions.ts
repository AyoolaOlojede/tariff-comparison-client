import {TarrifDto} from '../../shared/models/tarrif.model';
import {Action} from '@ngrx/store';

export enum TarrifActionTypes
{
  LoadByKwh = '[Tarrif] Load ByKwh',
  LoadByKwhSuccess = '[Tarrif] Load ByKwh Success',
  LoadByKwhFail = '[Tarrif] Load ByKwh Fail',
}


//Action Creators
export class LoadByKwh implements Action{
  readonly type = TarrifActionTypes.LoadByKwh;
  constructor(public payload: number){}
}

export class LoadByKwhSuccess implements Action{
  readonly type = TarrifActionTypes.LoadByKwhSuccess;
  constructor(public payload: TarrifDto[]){}
}

export class LoadByKwhFail implements Action{
  readonly type = TarrifActionTypes.LoadByKwhFail;
  constructor(public payload: string){}
}

//Union the valid types
export type TarrifActions= LoadByKwh | LoadByKwhSuccess | LoadByKwhFail;
