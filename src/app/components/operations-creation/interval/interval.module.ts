import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntervalRoutingModule } from './interval-routing.module';
import { IntervalComponent } from './interval.component';

@NgModule({
  declarations: [IntervalComponent],
  imports: [CommonModule, IntervalRoutingModule],
})
export class IntervalModule {}
