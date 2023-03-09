import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetryWhenRoutingModule } from './retry-when-routing.module';
import { RetryWhenComponent } from './retry-when.component';

@NgModule({
  declarations: [RetryWhenComponent],
  imports: [CommonModule, RetryWhenRoutingModule],
})
export class RetryWhenModule {}
