import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}
  ngOnInit(): void {
    this.initOperatorRetry();
  }

  private initOperatorRetry(): void {
    this._apiService.getUserRetry().subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
