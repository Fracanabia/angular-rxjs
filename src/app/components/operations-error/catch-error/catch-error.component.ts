import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}
  ngOnInit(): void {
    this.initOperatorCatchError();
  }

  private initOperatorCatchError(): void {
    this._apiService.getUserCatchError().subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
