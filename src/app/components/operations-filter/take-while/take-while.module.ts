import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeWhileRoutingModule } from './take-while-routing.module';
import { TakeWhileComponent } from './take-while.component';

@NgModule({
  declarations: [TakeWhileComponent],
  imports: [CommonModule, TakeWhileRoutingModule],
})
export class TakeWhileModule {}
