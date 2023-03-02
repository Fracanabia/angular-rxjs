import { Component, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}

  ngOnInit(): void {
    this.initOperatorToArray();
  }

  private initOperatorToArray(): void {
    const toArray$ = of({ name: 'Wesley' });

    toArray$.pipe(toArray()).subscribe({
      next: res => {
        console.log(`toArray: `, res);
      },
    });

    this._apiService.getUserToArray().subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
