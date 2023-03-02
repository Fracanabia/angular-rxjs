import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkipRoutingModule } from './skip-routing.module';
import { SkipComponent } from './skip.component';

@NgModule({
  declarations: [SkipComponent],
  imports: [CommonModule, SkipRoutingModule],
})
export class SkipModule {}
