import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss'],
})
export class TimeoutComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}
  ngOnInit(): void {
    this.initOperatorTimeout();
  }

  private initOperatorTimeout() {
    this._apiService.getUserTimeout().subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
