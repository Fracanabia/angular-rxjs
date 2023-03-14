import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EveryRoutingModule } from './every-routing.module';
import { EveryComponent } from './every.component';

@NgModule({
  declarations: [EveryComponent],
  imports: [CommonModule, EveryRoutingModule],
})
export class EveryModule {}
