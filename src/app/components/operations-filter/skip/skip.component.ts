import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval, skip, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss'],
})
export class SkipComponent implements AfterViewInit, OnDestroy {
  @ViewChild('myButton') myButton!: ElementRef;

  private _destroyed$ = new Subject();

  ngAfterViewInit(): void {
    this.initOperatorSkip();
  }

  initOperatorSkip() {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(
        skip(4),
        tap(() => console.log('Clicou, pulou 4'))
      )
      .subscribe();

    interval(1000)
      .pipe(skip(10), takeUntil(this._destroyed$))
      .subscribe({
        next: res => {
          console.log(`res => ${res}`);
        },
      });
  }

  ngOnDestroy(): void {
    this._destroyed$.next(null);
    this._destroyed$.unsubscribe();
  }
}
