import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskService } from './services/task.service';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [TaskListComponent, TaskDetailComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [TaskService],
})
export class TaskModule {}
