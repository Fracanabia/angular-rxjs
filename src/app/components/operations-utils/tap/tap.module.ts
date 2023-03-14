import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TapRoutingModule } from './tap-routing.module';
import { TapComponent } from './tap.component';

@NgModule({
  declarations: [TapComponent],
  imports: [CommonModule, TapRoutingModule],
})
export class TapModule {}
