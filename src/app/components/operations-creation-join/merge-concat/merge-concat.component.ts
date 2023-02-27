import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss'],
})
export class MergeConcatComponent implements OnInit, OnDestroy {
  constructor(private readonly _apiService: ApiService) {}

  private _destroy = new Subject();

  ngOnInit(): void {
    this.getUsersMerge();
    this.getUsersConcat();
  }

  private getUsersMerge(): void {
    this._apiService
      .getUsersMerge()
      .pipe(takeUntil(this._destroy))
      .subscribe({
        next: res => {
          console.log(`merge: `, res);
        },
      });
  }

  private getUsersConcat(): void {
    this._apiService
      .getUsersConcat()
      .pipe(takeUntil(this._destroy))
      .subscribe({
        next: res => {
          console.log(`concat: `, res);
        },
      });
  }

  ngOnDestroy(): void {
    this._destroy.next(null);
    this._destroy.unsubscribe();
  }
}
