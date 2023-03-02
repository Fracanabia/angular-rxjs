import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeConcatRoutingModule } from './merge-concat-routing.module';
import { MergeConcatComponent } from './merge-concat.component';

@NgModule({
  declarations: [MergeConcatComponent],
  imports: [CommonModule, MergeConcatRoutingModule],
})
export class MergeConcatModule {}
