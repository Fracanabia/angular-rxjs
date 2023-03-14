import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindIndexRoutingModule } from './find-index-routing.module';
import { FindIndexComponent } from './find-index.component';

@NgModule({
  declarations: [FindIndexComponent],
  imports: [CommonModule, FindIndexRoutingModule],
})
export class FindIndexModule {}
