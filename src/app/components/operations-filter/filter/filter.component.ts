import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject();

  ngOnInit(): void {
    this.initOperatorFilter();
  }

  initOperatorFilter() {
    const arrayObject$ = from([
      { id: 1, name: 'Wesley', age: 31 },
      { id: 2, name: 'Ana Paula', age: 29 },
      { id: 3, name: 'Amanda', age: 24 },
    ]);

    const names = arrayObject$.pipe(filter(value => value.age > 25));

    names.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });

    const interval$ = interval(1000);
    const numberGreaterThan5 = interval$.pipe(
      filter(value => value >= 5),
      takeUntil(this._destroyed$)
    );

    numberGreaterThan5.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }

  ngOnDestroy(): void {
    this._destroyed$.next(null);
    this._destroyed$.unsubscribe();
  }
}
