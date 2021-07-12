import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as TarrifActions  from 'src/app/store/actions/tarrif.actions';
import * as fromTarrifs from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { TarrifDto } from 'src/app/shared/models/tarrif.model';
import { TarrifService } from '../../core/services/tarrif.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarrif',
  templateUrl: './tarrif.component.html',
  styleUrls: ['./tarrif.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarrifComponent implements OnInit {


  tarrifs$!: Observable<TarrifDto[]>;
  searchForm = new FormGroup({
    searchText: new FormControl('',Validators.required),
  });
  constructor( private tarrifState: Store<fromTarrifs.State>) { 

  }

  ngOnInit(): void {
 
  }

  compareProducts() {
    const kwh = this.searchForm.get('searchText');
    this.tarrifState.dispatch(new TarrifActions.LoadByKwh(Number.parseInt(kwh?.value)));
    this.tarrifs$ = this.tarrifState.pipe(select(fromTarrifs.getTarrifByKwh));
  }

}
