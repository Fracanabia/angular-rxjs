import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss'],
})
export class AjaxComponent implements OnInit {
  ngOnInit(): void {
    this.initOperatorAjax();
  }

  private initOperatorAjax(): void {
    const http$ = ajax.getJSON('http://localhost:3000/users').pipe(
      catchError(error => {
        console.error(`Error: `, error);
        return of(error);
      })
    );

    http$.subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
