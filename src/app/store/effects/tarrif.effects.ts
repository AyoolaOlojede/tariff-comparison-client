import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TarrifService } from '../../core/services/tarrif.service';


/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as tarrifActions from '../actions/tarrif.actions';

@Injectable()
export class TarrifEffects {
  constructor(private tarrifService: TarrifService,
              private actions$: Actions) { }

loadTarrifByKwh$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tarrifActions.TarrifActionTypes.LoadByKwh),
      map(action =>  action['payload']),
      mergeMap((action) => this.tarrifService.compareProductsByAnnualCosts(action)
        .pipe(
          map(result => (new tarrifActions.LoadByKwhSuccess(result))),
          catchError(err => of(new tarrifActions.LoadByKwhFail(err)))
        )
      ),
    )
  );


}
