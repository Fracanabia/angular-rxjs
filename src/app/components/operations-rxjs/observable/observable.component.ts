import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  public logs: unknown[] = [];

  ngOnInit(): void {
    this.initObservable();
  }

  initObservable(): void {
    const observable = new Observable(subscriber => {
      subscriber.next(10);
      subscriber.next('string');
      subscriber.next(true);
      subscriber.next({ name: 'string' });
      subscriber.complete();
    });

    const observer = {
      next: (res: unknown) => {
        console.log(`next Observer: `, res);
      },
      error: (error: unknown) => {
        console.log(`error Observer: `, error);
      },
      complete: () => {
        console.log(`complete`);
      },
    };

    const intervalRxjs = interval(1000);

    const subscription = observable.subscribe(observer);
    const subscriptionWithIntervalRxjs = intervalRxjs.subscribe({
      next: res => console.log(`subscriptionWithIntervalRxjs: `, res),
    });

    subscription.unsubscribe();

    setTimeout(() => {
      subscriptionWithIntervalRxjs.unsubscribe();
    }, 3000);
  }
}
