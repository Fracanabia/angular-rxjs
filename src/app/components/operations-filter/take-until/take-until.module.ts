import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeUntilRoutingModule } from './take-until-routing.module';
import { TakeUntilComponent } from './take-until.component';

@NgModule({
  declarations: [TakeUntilComponent],
  imports: [CommonModule, TakeUntilRoutingModule],
})
export class TakeUntilModule {}
