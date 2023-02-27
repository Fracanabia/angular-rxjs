import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForkJoinRoutingModule } from './fork-join-routing.module';
import { ForkJoinComponent } from './fork-join.component';

@NgModule({
  declarations: [ForkJoinComponent],
  imports: [CommonModule, ForkJoinRoutingModule],
})
export class ForkJoinModule {}
