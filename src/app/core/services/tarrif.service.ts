import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { TarrifDto } from '../../shared/models/tarrif.model';

@Injectable({
  providedIn: 'root'
})
export class TarrifService {

  constructor(private apiService: BaseApiService) { }

   compareProductsByAnnualCosts(kwh: number) {
    const url = '/tarrif/compare-products-by-consumption/'+kwh;
    return this.apiService.get<TarrifDto[]>(url).pipe();
  }
}
