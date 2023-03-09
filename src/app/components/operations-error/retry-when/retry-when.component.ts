import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  delayWhen,
  interval,
  map,
  retryWhen,
  Subject,
  takeUntil,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss'],
})
export class RetryWhenComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject();

  ngOnDestroy(): void {
    this._destroyed$.next(null);
    this._destroyed$.unsubscribe();
  }
  ngOnInit(): void {
    this.initOperatorRetryWhen();
  }

  private initOperatorRetryWhen(): void {
    const interval$ = interval(1000);
    const subscription$ = interval$.pipe(
      map(value => {
        if (value > 5) {
          throw value;
        }

        return value;
      }),
      retryWhen(error =>
        error.pipe(
          tap(value => console.log(`RetryWhen => ${value} ${error}`)),
          delayWhen(value => timer(value * 1000))
        )
      )
    );

    subscription$.pipe(takeUntil(this._destroyed$)).subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
