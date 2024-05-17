import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  projectId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      details: ['', Validators.required],
      image_url: [''],
    });
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    if (this.projectId) {
      this.loadProject(this.projectId);
    }
  }

  async loadProject(id: number) {
    try {
      const project = await this.projectService.getProjectById(id);
      this.projectForm.patchValue(project);
    } catch (error) {
      console.error('Error loading project:', error);
    }
  }

  async onSubmit() {
    if (this.projectForm.valid) {
      try {
        if (this.projectId) {
          await this.projectService.updateProject(
            this.projectId,
            this.projectForm.value
          );
        } else {
          await this.projectService.addProject(this.projectForm.value);
        }
        this.router.navigate(['/projects']);
      } catch (error) {
        console.error('Error saving project:', error);
      }
    }
  }
}
