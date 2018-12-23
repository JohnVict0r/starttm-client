
import { NgModule } from '@angular/core';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs/clubs.component';

@NgModule({
  imports: [

    ClubsRoutingModule
  ],
  declarations: [ClubsComponent],
})
export class ClubsModule { }