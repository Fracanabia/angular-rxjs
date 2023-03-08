import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombineLatestRoutingModule } from './combine-latest-routing.module';
import { CombineLatestComponent } from './combine-latest.component';

@NgModule({
  declarations: [CombineLatestComponent],
  imports: [CommonModule, CombineLatestRoutingModule],
})
export class CombineLatestModule {}
