import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval, map, Subject, switchMap, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('myButton') myButton!: ElementRef;

  private _destroyed$ = new Subject();

  constructor(private readonly _apiService: ApiService) {}
  ngAfterViewInit(): void {
    this.initOperatorSwitchMap();
    this.initOperatorInterval();
  }

  private initOperatorInterval(): void {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(
        switchMap(() => interval(1000)),
        takeUntil(this._destroyed$)
      )
      .subscribe({
        next: res => {
          console.log(`interval: `, res);
        },
      });
  }

  private initOperatorSwitchMap(): void {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(switchMap(() => this._apiService.getUserSwitchMap()))
      .pipe(
        map(data => data.cpf),
        switchMap(cpf => this._apiService.getUserSwitchMapSearch(cpf))
      )
      .subscribe({
        next: res => {
          console.log(`res: `, res);
        },
      });
  }

  ngOnDestroy(): void {
    this._destroyed$.next(null);
    this._destroyed$.unsubscribe();
  }
}
