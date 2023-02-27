import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorInterval();
  }

  private initOperatorInterval(): void {
    const num = interval(1000);

    const subscription = num.subscribe({
      next: res => {
        console.log(`interval: `, res);
      },
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
