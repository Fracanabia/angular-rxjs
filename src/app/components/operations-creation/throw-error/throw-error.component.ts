import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss'],
})
export class ThrowErrorComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorThrowError();
  }

  private initOperatorThrowError(): void {
    const error = throwError('Deu ruim');

    error.subscribe({
      next: next => {
        console.log(`Throw Next: `, next);
      },
      error: error => {
        console.error(`Throw Error: `, error);
      },
      complete: () => {
        console.log(`Throw Complete`);
      },
    });
  }
}
