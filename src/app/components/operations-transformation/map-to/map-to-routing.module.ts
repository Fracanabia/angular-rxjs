import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapToComponent } from './map-to.component';

const routes: Routes = [{ path: '', component: MapToComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapToRoutingModule {}
