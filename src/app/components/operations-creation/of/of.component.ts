import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
})
export class OfComponent implements OnInit {
  @Input() public logs: unknown[] = [];

  ngOnInit(): void {
    this.initOperatorOf();
  }

  initOperatorOf(): void {
    const arr = of([1, 2, 3, 4, 5]);

    const string = of(['Hello World!']);

    const object = of({ name: 'Wesley' });

    const multiValue = of(true, function showName() {
      return 'Wesley';
    });

    arr.subscribe({
      next: res => console.log(`next Of: `, res),
    });

    string.subscribe({
      next: res => console.log(`next Of String: `, res),
    });

    object.subscribe({
      next: res => console.log(`next Of Object: `, res),
    });

    multiValue.subscribe({
      next: res => console.log(`next Of Boolean|Function: `, res),
    });
  }
}
