import { TableComponent } from './../../_components/table/table.component';
import { NotificationsComponent } from './../../_components/notifications/notifications.component';
import { IconsComponent } from './../../_components/icons/icons.component';
import { TypographyComponent } from './../../_components/typography/typography.component';
import { TablesComponent } from './../../_components/tables/tables.component';
import { UserComponent } from './../../_components/user/user.component';
import { LbdModule } from './../../_components/lbd/lbd.module';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NguiMapModule } from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

const components = [
  UserComponent,
  TablesComponent,
  TypographyComponent,
  IconsComponent,
  NotificationsComponent,
  TableComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
  ],
  declarations: [
    components
  ]
})

export class AdminLayoutModule { }
