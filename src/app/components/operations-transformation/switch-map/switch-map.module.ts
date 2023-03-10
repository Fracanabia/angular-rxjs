import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SwitchMapRoutingModule } from './switch-map-routing.module';
import { SwitchMapComponent } from './switch-map.component';

@NgModule({
  declarations: [SwitchMapComponent],
  imports: [CommonModule, SwitchMapRoutingModule],
})
export class SwitchMapModule {}
