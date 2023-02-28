import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, mapTo, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss'],
})
export class MapToComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject();

  ngOnInit(): void {
    this.initOperatorMapTo();
  }

  private initOperatorMapTo(): void {
    const click$ = fromEvent(document, 'click');
    const mapToClick$ = click$.pipe(mapTo('Clicked'));
    // const mapToClick$ = click$.pipe(map(() => 'Clicked'));
    mapToClick$.subscribe({
      next: res => {
        console.log(`click: `, res);
      },
    });

    const interval$ = interval(1000);
    const mapToInterval$ = interval$.pipe(
      mapTo('send interval'),
      takeUntil(this._destroyed$)
    );
    // const mapToClick$ = click$.pipe(map(() => 'Clicked'));
    mapToInterval$.subscribe({
      next: res => {
        console.log(`interval: `, res);
      },
    });
  }

  ngOnDestroy(): void {
    this._destroyed$.next(null);
    this._destroyed$.unsubscribe;
  }
}
