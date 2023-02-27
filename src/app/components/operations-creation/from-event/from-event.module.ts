import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FromEventRoutingModule } from './from-event-routing.module';
import { FromEventComponent } from './from-event.component';

@NgModule({
  declarations: [FromEventComponent],
  imports: [CommonModule, FromEventRoutingModule],
})
export class FromEventModule {}
