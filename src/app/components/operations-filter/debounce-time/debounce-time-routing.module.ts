import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time.component';

const routes: Routes = [{ path: '', component: DebounceTimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebounceTimeRoutingModule {}
