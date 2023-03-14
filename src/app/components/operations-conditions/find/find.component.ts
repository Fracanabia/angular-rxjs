import { Component, OnInit } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorFind();
  }

  private initOperatorFind(): void {
    const array$ = of('Wesley', 'Ana Paula', 'Amanda');

    const findName$ = array$.pipe(find(name => name === 'Wesley'));

    findName$.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
