import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetryComponent } from './retry.component';

const routes: Routes = [{ path: '', component: RetryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetryRoutingModule {}
