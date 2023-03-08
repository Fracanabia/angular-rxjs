import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, Subject, takeUntil, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss'],
})
export class WithLatestFromComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject();

  ngOnDestroy(): void {
    this._destroyed$.next(null);
    this._destroyed$.unsubscribe();
  }
  ngOnInit(): void {
    this.initOperatorWithLatestFrom();
  }

  private initOperatorWithLatestFrom(): void {
    const clicks$ = fromEvent(document, 'click');

    const timers$ = interval(1000);

    const result$ = clicks$.pipe(withLatestFrom(timers$));

    result$.pipe(takeUntil(this._destroyed$)).subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
