import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithLatestFromRoutingModule } from './with-latest-from-routing.module';
import { WithLatestFromComponent } from './with-latest-from.component';

@NgModule({
  declarations: [WithLatestFromComponent],
  imports: [CommonModule, WithLatestFromRoutingModule],
})
export class WithLatestFromModule {}
