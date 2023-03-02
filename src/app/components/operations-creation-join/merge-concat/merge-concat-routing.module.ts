import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeConcatComponent } from './merge-concat.component';

const routes: Routes = [{ path: '', component: MergeConcatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MergeConcatRoutingModule {}
