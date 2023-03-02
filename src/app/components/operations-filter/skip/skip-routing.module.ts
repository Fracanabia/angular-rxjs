import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkipComponent } from './skip.component';

const routes: Routes = [{ path: '', component: SkipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkipRoutingModule {}
