import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss'],
})
export class MergeConcatComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}

  ngOnInit(): void {
    this.getUsersMerge();
    this.getUsersConcat();
  }

  private getUsersMerge(): void {
    this._apiService.getUsersMerge().subscribe({
      next: res => {
        console.log(`merge: `, res);
      },
    });
  }

  private getUsersConcat(): void {
    this._apiService.getUsersConcat().subscribe({
      next: res => {
        console.log(`concat: `, res);
      },
    });
  }
}
