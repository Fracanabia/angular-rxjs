import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithLatestFromComponent } from './with-latest-from.component';

const routes: Routes = [{ path: '', component: WithLatestFromComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithLatestFromRoutingModule {}
