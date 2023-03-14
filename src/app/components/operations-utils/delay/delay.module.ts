import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelayRoutingModule } from './delay-routing.module';
import { DelayComponent } from './delay.component';

@NgModule({
  declarations: [DelayComponent],
  imports: [CommonModule, DelayRoutingModule],
})
export class DelayModule {}
