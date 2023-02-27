import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjaxComponent } from './ajax.component';

const routes: Routes = [{ path: '', component: AjaxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjaxRoutingModule {}
