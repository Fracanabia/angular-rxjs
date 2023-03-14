import { Component, OnInit } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss'],
})
export class EveryComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorEvery();
  }

  private initOperatorEvery(): void {
    const values$ = of(1, 2, 3, 4, 2);

    const equals$ = values$.pipe(every(value => value < 5));

    equals$.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
