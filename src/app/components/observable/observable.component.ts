import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  public logs: string[] = [];

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
      next: (res: any) => {
        this.logs.push(`next: ${JSON.stringify(res)}`);
      },
      error: (error: any) => {
        this.logs.push(`error: ${JSON.stringify(error)}`);
      },
      complete: () => {
        this.logs.push(`complete: completou`);
      },
    };

    const intervalRxjs = interval(1000);

    const subscription = observable.subscribe(observer);
    const subscriptionWithIntervalRxjs = intervalRxjs.subscribe({
      next: res => this.logs.push(JSON.stringify(res)),
    });

    subscription.unsubscribe();

    setTimeout(() => {
      subscriptionWithIntervalRxjs.unsubscribe();
    }, 3000);
  }
}
