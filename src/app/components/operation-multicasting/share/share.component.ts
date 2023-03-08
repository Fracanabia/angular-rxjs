import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}
  ngOnInit(): void {
    this.initOperatorShare();
  }

  private initOperatorShare() {
    const users$ = this._apiService.getUserShare();
    const nameWesley$ = users$.pipe(
      map(users => users.filter(user => user.name === 'Wesley'))
    );
    const nameAmanda$ = users$.pipe(
      map(users => users.filter(user => user.name === 'Amanda'))
    );

    const nameAnaPaula$ = users$.pipe(
      map(users => users.filter(user => user.name === 'Ana Paula'))
    );

    users$.subscribe({
      next: users => {
        console.log(`users: `, users);
      },
    });

    nameAmanda$.subscribe({
      next: nameAmanda => {
        console.log(`nameAmanda: `, nameAmanda);
      },
    });

    nameWesley$.subscribe({
      next: nameWesley => {
        console.log(`nameWesley: `, nameWesley);
      },
    });

    nameAnaPaula$.subscribe({
      next: nameAnaPaula => {
        console.log(`nameAnaPaula: `, nameAnaPaula);
      },
    });
  }
}
