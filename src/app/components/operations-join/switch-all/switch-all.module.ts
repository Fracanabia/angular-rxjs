import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchAllRoutingModule } from './switch-all-routing.module';
import { SwitchAllComponent } from './switch-all.component';

@NgModule({
  declarations: [SwitchAllComponent],
  imports: [CommonModule, SwitchAllRoutingModule],
})
export class SwitchAllModule {}
