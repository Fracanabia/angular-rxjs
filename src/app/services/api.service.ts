import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  concat,
  forkJoin,
  interval,
  map,
  merge,
  Observable,
  toArray,
  zip,
} from 'rxjs';

type User = { id: number; name: string; email: string; cpf: string };

type UserCpf = { cpf: string };

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly _httpClient: HttpClient) {}

  public getUsersForkJoin(): Observable<{
    apiLocal: User[];
    apiExternal: object;
  }> {
    const http$ = forkJoin({
      apiLocal: this._httpClient.get<User[]>('http://localhost:3000/users'),
      apiExternal: this._httpClient.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      ),
    });

    return http$;
  }

  public getUsersZip(): Observable<[User[], object]> {
    const apiLocal$ = this._httpClient.get<User[]>(
      'http://localhost:3000/users'
    );
    const apiExternal$ = this._httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const http$ = zip(apiLocal$, apiExternal$);

    return http$;
  }

  public getUsersMerge(): Observable<number | User[] | object> {
    const interval$ = interval(1000);
    const apiLocal$ = this._httpClient.get<User[]>(
      'http://localhost:3000/users'
    );
    const apiExternal$ = this._httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const http$ = merge(interval$, apiLocal$, apiExternal$);

    return http$;
  }

  public getUsersConcat(): Observable<number | User[] | object> {
    const interval$ = interval(1000);
    const apiLocal$ = this._httpClient.get<User[]>(
      'http://localhost:3000/users'
    );
    const apiExternal$ = this._httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const http$ = concat(interval$, apiLocal$, apiExternal$);

    return http$;
  }

  public getUserMap(): Observable<string[]> {
    return this._httpClient
      .get<User[]>('http://localhost:3000/users')
      .pipe(map(users => users.map(user => user.name)));
  }

  public getUserSwitchMap(): Observable<UserCpf> {
    return this._httpClient.get<UserCpf>('http://localhost:3000/user');
  }

  public getUserSwitchMapSearch(cpf: string): Observable<User[]> {
    return this._httpClient.get<User[]>(
      `http://localhost:3000/users?cpf=${cpf}`
    );
  }

  public getUserToArray(): Observable<UserCpf[]> {
    return this._httpClient
      .get<UserCpf>(`http://localhost:3000/user`)
      .pipe(toArray());
  }

  public getUserDebounceTime(name: string): Observable<User[]> {
    return this._httpClient.get<User[]>(
      `http://localhost:3000/users?name=${name}`
    );
  }
}
