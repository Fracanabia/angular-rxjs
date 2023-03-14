import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss'],
})
export class FindIndexComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorFindIndex();
  }

  private initOperatorFindIndex(): void {
    const array$ = of('Wesley', 'Ana Paula', 'Amanda');

    const findIndex$ = array$.pipe(findIndex(name => name === 'Wesley'));

    findIndex$.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
