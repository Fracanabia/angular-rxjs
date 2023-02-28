import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private readonly _apiService: ApiService) {}

  ngOnInit(): void {
    this.initOperatorMap();
    this.getUsers();
  }

  private initOperatorMap(): void {
    const arrayObject$ = from([
      { id: 1, name: 'Wesley', age: 31 },
      { id: 2, name: 'Ana Paula', age: 29 },
      { id: 3, name: 'Amanda', age: 24 },
    ]);

    const arrayNumber$ = from([1, 2, 3, 4]);

    const arrayOnlyWithName = arrayObject$.pipe(map(arr => arr.name));

    const arrayDouble = arrayNumber$.pipe(map(arr => arr * 2));

    arrayOnlyWithName.subscribe(res => console.log(`arrayOnlyWithName: `, res));

    arrayDouble.subscribe(res => console.log(`arrayDouble: `, res));
  }

  private getUsers(): void {
    this._apiService.getUserMap().subscribe(res => console.log(`res: `, res));
  }
}
