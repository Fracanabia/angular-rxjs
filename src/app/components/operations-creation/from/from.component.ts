import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit {
  public logs: unknown[] = [];

  ngOnInit(): void {
    this.initOperatorFrom();
  }

  initOperatorFrom(): void {
    const arr = from([1, 2, 3, 4, 5]);

    const promise = from(new Promise(resolve => resolve('Hello World!')));

    const string = from('Hello World!');

    arr.subscribe({
      next: res => console.log(`next From: `, res),
    });

    promise.subscribe({
      next: res => console.log(`next From Promise: `, res),
    });

    string.subscribe({
      next: res => console.log(`next From String: `, res),
    });
  }
}
