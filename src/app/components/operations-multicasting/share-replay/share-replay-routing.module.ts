import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareReplayComponent } from './share-replay.component';

const routes: Routes = [{ path: '', component: ShareReplayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareReplayRoutingModule {}
