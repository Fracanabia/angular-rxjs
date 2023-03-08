import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, switchAll, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.scss'],
})
export class SwitchAllComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorSwitchAll();
  }

  private initOperatorSwitchAll(): void {
    const click$ = fromEvent(document, 'click').pipe(
      tap(() => console.log('Clicked'))
    );

    const source$ = click$.pipe(
      map(() => interval(1000).pipe(takeWhile(value => value <= 10)))
    );

    source$.pipe(switchAll()).subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
