import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsEmptyComponent } from './is-empty.component';

const routes: Routes = [{ path: '', component: IsEmptyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsEmptyRoutingModule {}
