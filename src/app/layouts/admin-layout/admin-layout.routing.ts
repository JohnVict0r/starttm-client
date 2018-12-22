import { Routes } from '@angular/router';

import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { TableComponent } from '../../table/table.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
    { path: 'user',           component: UserComponent },
    { path: 'events',           loadChildren: 'app/events/events.module#EventsModule'},
    { path: 'clubs',           loadChildren: 'app/clubs/clubs.module#ClubsModule'},
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'table-event', component: TableComponent }
];
