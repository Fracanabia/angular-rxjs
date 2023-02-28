import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapToRoutingModule } from './map-to-routing.module';
import { MapToComponent } from './map-to.component';

@NgModule({
  declarations: [MapToComponent],
  imports: [CommonModule, MapToRoutingModule],
})
export class MapToModule {}
