import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartWithRoutingModule } from './start-with-routing.module';
import { StartWithComponent } from './start-with.component';

@NgModule({
  declarations: [StartWithComponent],
  imports: [CommonModule, StartWithRoutingModule],
})
export class StartWithModule {}
