import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeoutComponent } from './timeout.component';

const routes: Routes = [{ path: '', component: TimeoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeoutRoutingModule {}
