import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeRoutingModule } from './take-routing.module';
import { TakeComponent } from './take.component';

@NgModule({
  declarations: [TakeComponent],
  imports: [CommonModule, TakeRoutingModule],
})
export class TakeModule {}
