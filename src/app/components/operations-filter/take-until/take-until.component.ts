import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorTakeUntil();
  }

  initOperatorTakeUntil() {
    const interval$ = interval(1000);
    const timer$ = timer(5000);
    const subscription = interval$.pipe(takeUntil(timer$));

    subscription.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });

    const click$ = fromEvent(document, 'click');
    const intervalToClick$ = interval(1000);
    const subscriptionToClick = intervalToClick$.pipe(takeUntil(click$));

    subscriptionToClick.subscribe({
      next: res => {
        console.log(`click to unsubscribe: `, res);
      },
    });
  }
}
