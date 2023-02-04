import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';

@NgModule({
  declarations: [SubjectComponent],
  imports: [CommonModule, SubjectRoutingModule],
})
export class SubjectModule {}
