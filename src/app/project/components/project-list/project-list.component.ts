import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: any[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  async loadProjects() {
    try {
      this.projects = await this.projectService.getProjects();
      console.log(this.projects); // Vérifiez que les projets sont bien récupérés
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  }

  viewDetails(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
