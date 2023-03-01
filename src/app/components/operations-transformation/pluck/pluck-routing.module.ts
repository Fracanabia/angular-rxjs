import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PluckComponent } from './pluck.component';

const routes: Routes = [{ path: '', component: PluckComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PluckRoutingModule {}
