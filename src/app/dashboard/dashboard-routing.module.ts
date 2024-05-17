import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('../project/project.module').then((m) => m.ProjectModule),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('../task/task.module').then((m) => m.TaskModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('../calendar/calendar.module').then((m) => m.CalendarModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../report/report.module').then((m) => m.ReportModule),
      },
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: '**', redirectTo: 'projects' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
