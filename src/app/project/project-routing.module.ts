import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { TaskFormComponent } from '../task/components/task-form/task-form.component';
import { TaskDetailComponent } from '../task/components/task-detail/task-detail.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'add', component: ProjectFormComponent },
  { path: 'edit/:id', component: ProjectFormComponent },
  { path: ':id/edit/:id', component: ProjectFormComponent },

  { path: ':id', component: ProjectDetailComponent },
  { path: '', component: ProjectListComponent },
  { path: 'add', component: ProjectFormComponent },
  { path: 'edit/:id', component: ProjectFormComponent },
  { path: ':id', component: ProjectDetailComponent },
  { path: ':id/tasks/add', component: TaskFormComponent },
  { path: ':id/tasks/edit/:taskId', component: TaskFormComponent },
  { path: ':id/tasks/:taskId', component: TaskDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
