import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { TaskService } from '../../../task/services/task.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  tasks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProjectDetails(+id);
      this.loadProjectTasks(+id);
    }
  }

  async loadProjectDetails(id: number) {
    try {
      this.project = await this.projectService.getProjectById(id);
      console.log(this.project); // Vérifiez que les détails du projet sont bien récupérés
    } catch (error) {
      console.error('Error loading project details:', error);
    }
  }

  async loadProjectTasks(projectId: number) {
    try {
      this.tasks = await this.taskService.getTasksByProjectId(projectId);
      console.log(this.tasks); // Vérifiez que les tâches sont bien récupérées
    } catch (error) {
      console.error('Error loading project tasks:', error);
    }
  }
}
