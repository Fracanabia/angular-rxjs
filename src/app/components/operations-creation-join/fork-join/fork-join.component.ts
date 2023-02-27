import { Component, OnInit } from '@angular/core';
import { forkJoin, of, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss'],
})
export class ForkJoinComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}

  ngOnInit(): void {
    this.initOperatorForkJoin();
    this.getUsersForkJoin();
  }

  getUsersForkJoin() {
    this._apiService.getUsersForkJoin().subscribe({
      next: res => {
        console.log(`forkJoin: `, res);
      },
    });
  }

  private initOperatorForkJoin(): void {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExternal: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'),
    });

    const httpMulti$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(100),
      error: throwError('Ocorreu um erro!'),
      pro: Promise.resolve(10),
    });

    http$.subscribe({
      next: res => {
        console.log(`http: `, res);
      },
    });

    httpMulti$.subscribe({
      next: res => {
        console.log(`httpMulti: `, res);
      },
    });
  }
}
