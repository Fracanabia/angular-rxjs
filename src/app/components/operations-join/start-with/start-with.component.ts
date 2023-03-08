import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss'],
})
export class StartWithComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorStartWith();
  }

  private initOperatorStartWith(): void {
    const values$ = of(1, 2, 3);
    const message$ = of('World', 'Goodbye');

    const numbers$ = values$.pipe(startWith(0));

    const messageWelcome$ = message$.pipe(startWith('Hello'));

    values$.subscribe({
      next: res => {
        console.log(`values: `, res);
      },
    });

    numbers$.subscribe({
      next: res => {
        console.log(`numbers: `, res);
      },
    });

    message$.subscribe({
      next: res => {
        console.log(`message: `, res);
      },
    });

    messageWelcome$.subscribe({
      next: res => {
        console.log(`messageWelcome: `, res);
      },
    });
  }
}
