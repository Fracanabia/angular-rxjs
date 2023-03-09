import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetryRoutingModule } from './retry-routing.module';
import { RetryComponent } from './retry.component';

@NgModule({
  declarations: [RetryComponent],
  imports: [CommonModule, RetryRoutingModule],
})
export class RetryModule {}
