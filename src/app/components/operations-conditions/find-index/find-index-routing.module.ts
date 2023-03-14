import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindIndexComponent } from './find-index.component';

const routes: Routes = [{ path: '', component: FindIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindIndexRoutingModule {}
