import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsEmptyRoutingModule } from './is-empty-routing.module';
import { IsEmptyComponent } from './is-empty.component';

@NgModule({
  declarations: [IsEmptyComponent],
  imports: [CommonModule, IsEmptyRoutingModule],
})
export class IsEmptyModule {}
