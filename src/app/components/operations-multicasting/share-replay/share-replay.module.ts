import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareReplayRoutingModule } from './share-replay-routing.module';
import { ShareReplayComponent } from './share-replay.component';

@NgModule({
  declarations: [ShareReplayComponent],
  imports: [CommonModule, ShareReplayRoutingModule],
})
export class ShareReplayModule {}
