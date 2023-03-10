import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipComponent } from './zip.component';

const routes: Routes = [{ path: '', component: ZipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZipRoutingModule {}
