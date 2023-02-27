import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OfRoutingModule } from './of-routing.module';
import { OfComponent } from './of.component';

@NgModule({
  declarations: [OfComponent],
  imports: [CommonModule, OfRoutingModule],
})
export class OfModule {}
