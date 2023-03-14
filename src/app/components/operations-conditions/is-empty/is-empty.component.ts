import { Component, OnInit } from '@angular/core';
import { EMPTY, isEmpty, Subject } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss'],
})
export class IsEmptyComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorIsEmpty();
  }

  private initOperatorIsEmpty(): void {
    const subject$ = new Subject<string>();

    const result$ = subject$.pipe(isEmpty());
    const isEmpty$ = EMPTY.pipe(isEmpty());

    subject$.subscribe({
      next: subject => {
        console.log(`subject: `, subject);
      },
    });

    result$.subscribe({
      next: result => {
        console.log(`result: `, result);
      },
    });

    isEmpty$.subscribe({
      next: isEmpty => {
        console.log(`isEmpty: `, isEmpty);
      },
    });

    subject$.next('Wesley');
  }
}
