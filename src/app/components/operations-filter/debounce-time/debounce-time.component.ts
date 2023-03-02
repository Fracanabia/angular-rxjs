import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  constructor(private readonly _apiService: ApiService) {}

  ngAfterViewInit(): void {
    this.initOperatorDebounceTime();
  }

  initOperatorDebounceTime() {
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map(event => (event.target as HTMLInputElement).value),
        switchMap(value => this._apiService.getUserDebounceTime(value))
      )
      .subscribe();
  }
}
