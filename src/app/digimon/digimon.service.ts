import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Digimon } from './digimon.interface';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DigimonService {
  url = environment.apiUrl + '/digimons';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private readonly http: HttpClient) {}

  getDigimons(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(this.url, this.httpOptions).pipe(
      catchError((error: any) => {
        console.error(error);
        return of([] as Digimon[]);
      })
    );
  }
}
