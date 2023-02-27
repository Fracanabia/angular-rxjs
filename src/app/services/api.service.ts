import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, forkJoin, interval, merge, Observable, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly _httpClient: HttpClient) {}

  public getUsersForkJoin(): Observable<{
    apiLocal: object;
    apiExternal: object;
  }> {
    const http$ = forkJoin({
      apiLocal: this._httpClient.get('http://localhost:3000/users'),
      apiExternal: this._httpClient.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      ),
    });

    return http$;
  }

  public getUsersZip(): Observable<[object, object]> {
    const apiLocal$ = this._httpClient.get('http://localhost:3000/users');
    const apiExternal$ = this._httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const http$ = zip(apiLocal$, apiExternal$);

    return http$;
  }

  public getUsersMerge(): Observable<number | object> {
    const interval$ = interval(1000);
    const apiLocal$ = this._httpClient.get('http://localhost:3000/users');
    const apiExternal$ = this._httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const http$ = merge(interval$, apiLocal$, apiExternal$);

    return http$;
  }

  public getUsersConcat(): Observable<number | object> {
    const interval$ = interval(1000);
    const apiLocal$ = this._httpClient.get('http://localhost:3000/users');
    const apiExternal$ = this._httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const http$ = concat(interval$, apiLocal$, apiExternal$);

    return http$;
  }
}
