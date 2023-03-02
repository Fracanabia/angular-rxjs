import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss'],
})
export class TakeWhileComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorTakeWhile();
  }

  initOperatorTakeWhile() {
    const interval$ = interval(1000);
    const subscription = interval$.pipe(takeWhile(value => value <= 5));

    subscription.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
