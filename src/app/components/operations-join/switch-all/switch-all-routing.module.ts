import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchAllComponent } from './switch-all.component';

const routes: Routes = [{ path: '', component: SwitchAllComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchAllRoutingModule {}
