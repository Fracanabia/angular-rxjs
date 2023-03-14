import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss'],
})
export class DelayComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}
  ngOnInit(): void {
    this.initOperatorDelay();
  }

  private initOperatorDelay() {
    this._apiService.getUserDelay().subscribe({
      next: res => {
        console.log(`res: `, res);
      },
    });
  }
}
