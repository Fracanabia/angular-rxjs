import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorCombineLatest();
  }

  private initOperatorCombineLatest(): void {
    const observableOne$ = interval(1000).pipe(take(4));
    const observableTwo$ = of(5, 6, 7, 8);
    const observableThree$ = interval(1000).pipe(take(4));

    const combine$ = combineLatest([
      observableOne$,
      observableTwo$,
      observableThree$,
    ]);

    combine$.subscribe({
      next: combine => {
        console.log(`combine: `, combine);
      },
    });
  }
}
