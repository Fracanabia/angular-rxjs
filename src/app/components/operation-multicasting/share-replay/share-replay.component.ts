import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}
  ngOnInit(): void {
    this.initOperatorShareReplay();
  }

  private initOperatorShareReplay() {
    const users$ = this._apiService.getUserShareReplay();
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
