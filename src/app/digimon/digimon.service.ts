import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Digimon } from './digimon.interface';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DigimonService {
  url = 'http://localhost:3000/digimons';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private readonly http: HttpClient) {}

  getDigimons(): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(this.url, this.httpOptions).pipe(
      tap(() => console.log('fetched digimons')),
      catchError((error: any) => {
        console.error(error);
        return of([] as Digimon[]);
      })
    );
  }
}
