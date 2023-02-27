import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjaxRoutingModule } from './ajax-routing.module';
import { AjaxComponent } from './ajax.component';

@NgModule({
  declarations: [AjaxComponent],
  imports: [CommonModule, AjaxRoutingModule],
})
export class AjaxModule {}
