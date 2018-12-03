import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { EventsComponent } from '../../events/events.component';
import { ClubsComponent } from '../../clubs/clubs.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CreateEventComponent } from '../../create-event/create-event.component';
import { TableComponent } from '../../table/table.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'events',           component: EventsComponent },
    { path: 'clubs',           component: ClubsComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'create-event', component: CreateEventComponent },
    { path: 'table', component: TableComponent }
];
