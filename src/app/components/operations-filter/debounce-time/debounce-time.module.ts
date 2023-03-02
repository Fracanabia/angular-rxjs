import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebounceTimeRoutingModule } from './debounce-time-routing.module';
import { DebounceTimeComponent } from './debounce-time.component';

@NgModule({
  declarations: [DebounceTimeComponent],
  imports: [CommonModule, DebounceTimeRoutingModule],
})
export class DebounceTimeModule {}
