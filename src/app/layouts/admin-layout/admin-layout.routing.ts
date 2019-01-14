import { TableComponent } from './../../_components/table/table.component';
import { NotificationsComponent } from './../../_components/notifications/notifications.component';
import { IconsComponent } from './../../_components/icons/icons.component';
import { TypographyComponent } from './../../_components/typography/typography.component';
import { TablesComponent } from './../../_components/tables/tables.component';
import { UserComponent } from './../../_components/user/user.component';
import { Routes } from '@angular/router';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', loadChildren: 'app/_components/dashboard/dashboard.module#DashboardModule' },
    { path: 'user', component: UserComponent },
    { path: 'events', loadChildren: 'app/_components/events/events.module#EventsModule' },
    { path: 'clubs', loadChildren: 'app/_components/clubs/clubs.module#ClubsModule' },
    { path: 'table', component: TablesComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'table-event', component: TableComponent }
];
