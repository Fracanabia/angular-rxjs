import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToArrayComponent } from './to-array.component';

const routes: Routes = [{ path: '', component: ToArrayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToArrayRoutingModule {}
