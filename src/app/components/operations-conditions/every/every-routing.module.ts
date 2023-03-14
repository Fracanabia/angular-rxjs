import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EveryComponent } from './every.component';

const routes: Routes = [{ path: '', component: EveryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EveryRoutingModule {}
