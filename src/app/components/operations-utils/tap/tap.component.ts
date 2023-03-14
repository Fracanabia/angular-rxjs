import { Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorTap();
  }

  private initOperatorTap() {
    const array$ = of([
      {
        id: 1,
        name: 'Wesley',
        idade: 31,
      },
      {
        id: 2,
        name: 'Ana Paula',
        idade: 29,
      },
    ]);

    const subscription$ = array$.pipe(
      tap(value => console.log(`before map: `, value)),
      map(value => value.filter(v => v.name === 'Wesley')),
      tap(value => console.log(`after map: `, value))
    );

    subscription$.subscribe();
  }
}
