import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FromRoutingModule } from './from-routing.module';
import { FromComponent } from './from.component';

@NgModule({
  declarations: [FromComponent],
  imports: [CommonModule, FromRoutingModule],
})
export class FromModule {}
