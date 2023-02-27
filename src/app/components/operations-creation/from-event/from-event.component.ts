import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('myButton') myButton!: ElementRef;
  public logs: unknown[] = [];

  ngAfterViewInit(): void {
    this.initOperatorFromEvent();
  }

  initOperatorFromEvent(): void {
    const el = fromEvent(this.myButton.nativeElement, 'click');

    el.subscribe({
      next: res => console.log(`click: `, res),
    });
  }
}
