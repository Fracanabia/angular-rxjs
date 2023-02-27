import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZipRoutingModule } from './zip-routing.module';
import { ZipComponent } from './zip.component';

@NgModule({
  declarations: [ZipComponent],
  imports: [CommonModule, ZipRoutingModule],
})
export class ZipModule {}
