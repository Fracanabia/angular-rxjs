import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeoutRoutingModule } from './timeout-routing.module';
import { TimeoutComponent } from './timeout.component';

@NgModule({
  declarations: [TimeoutComponent],
  imports: [CommonModule, TimeoutRoutingModule],
})
export class TimeoutModule {}
