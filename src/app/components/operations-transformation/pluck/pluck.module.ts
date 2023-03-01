import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluckRoutingModule } from './pluck-routing.module';
import { PluckComponent } from './pluck.component';

@NgModule({
  declarations: [PluckComponent],
  imports: [CommonModule, PluckRoutingModule],
})
export class PluckModule {}
