import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

    apiUrl: string;
    constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    }

     private formatErrors(error: any) {
      return  throwError(error.error);
    }

    get<T>(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get<T>(`${this.apiUrl}${path}`, { params })
    .pipe(catchError(this.formatErrors));
    }

    // tslint:disable-next-line:ban-types
    put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${this.apiUrl}${path}`,JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`,JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }

    delete(path: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}`).pipe(catchError(this.formatErrors));
    }
}
