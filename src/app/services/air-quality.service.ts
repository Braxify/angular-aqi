import { Observable, catchError, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ErrorService } from './error.service';
import {
  ISearchCityResponse,
  ISearchCityResult,
} from '../models/search-city-results';

@Injectable({
  providedIn: 'root',
})
export class AirQualityService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  searchCityResult: ISearchCityResult[] = [];

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }

  getDataByCity(term: string): Observable<ISearchCityResponse> {
    console.log('term', term);
    return this.http
      .get<ISearchCityResponse>(
        `https://search.waqi.info/nsearch/world/${term}`
      )
      .pipe(
        tap((res) => (this.searchCityResult = res.results)),
        catchError(this.errorHandler.bind(this))
      );
  }
}
