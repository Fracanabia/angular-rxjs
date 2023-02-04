import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  public logs: string[] = [];

  ngOnInit(): void {
    this.initSubject();
    this.initBehaviorSubject();
  }

  initSubject(): void {
    const subject = new Subject<number>();

    subject.subscribe({
      next: res => this.logs.push(`next Subject: ${JSON.stringify(res)}`),
    });

    subject.next(10);
    subject.next(12);
  }

  initBehaviorSubject(): void {
    const behaviorSubject = new BehaviorSubject<number>(0);

    behaviorSubject.subscribe({
      next: res =>
        this.logs.push(`next BehaviorSubject: ${JSON.stringify(res)}`),
    });

    behaviorSubject.next(10);
    behaviorSubject.next(12);
  }
}
