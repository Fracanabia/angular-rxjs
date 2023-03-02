import { Component, OnInit } from '@angular/core';
import { from, interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorTake();
  }

  initOperatorTake() {
    const arrayObject$: Observable<{ id: number; name: string; age: number }> =
      from([
        { id: 1, name: 'Wesley', age: 31 },
        { id: 2, name: 'Ana Paula', age: 29 },
        { id: 3, name: 'Amanda', age: 24 },
      ]);

    const names = arrayObject$.pipe(
      map(data => data.name),
      take(1)
    );

    names.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });

    const interval$ = interval(1000);
    const first5Values = interval$.pipe(take(5));

    first5Values.subscribe({
      next: res => {
        console.log(`first5Values: `, res);
      },
    });
  }
}
