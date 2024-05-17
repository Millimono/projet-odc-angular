import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectService } from './services/project.service';
import { TaskRoutingModule } from '../task/task-routing.module';
import { CalendarRoutingModule } from '../calendar/calendar-routing.module';

@NgModule({
  declarations: [ProjectListComponent, ProjectDetailComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TaskRoutingModule,
    CalendarRoutingModule,
  ],
  providers: [ProjectService],
})
export class ProjectModule {}
