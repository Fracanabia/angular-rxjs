import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeUntilComponent } from './take-until.component';

const routes: Routes = [{ path: '', component: TakeUntilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeUntilRoutingModule {}
