import { Component, OnInit } from '@angular/core';
import { from, Observable, pluck } from 'rxjs';

type Data = {
  name: string;
  age: number;
  job?: { title: string; language: string };
};

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorPluck();
  }

  private initOperatorPluck(): void {
    const array$: Observable<Data> = from([
      {
        name: 'Wesley',
        age: 31,
        job: {
          title: 'developer',
          language: 'JS/TS',
        },
      },
      {
        name: 'Ana paula',
        age: 2,
      },
      {
        name: 'Amanda',
        age: 31,
      },
    ]);

    const name$ = array$.pipe(pluck('name'));
    // const name$ = array$.pipe(map(data => data.name));

    const job$ = array$.pipe(pluck('job', 'title'));
    // const job$ = array$.pipe(map(data => data.job?.title));

    name$.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });

    job$.subscribe({
      next: res => {
        console.log(`job: `, res);
      },
    });
  }
}
