import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetryWhenComponent } from './retry-when.component';

const routes: Routes = [{ path: '', component: RetryWhenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetryWhenRoutingModule {}
