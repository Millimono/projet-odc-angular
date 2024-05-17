import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  taskId: number | null = null;
  projectId!: number;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      details: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params) => {
      this.projectId = +params['id'];
    });

    this.taskId = this.route.snapshot.params['taskId'];
    if (this.taskId) {
      this.loadTask(this.taskId);
    }
  }

  async loadTask(id: number) {
    try {
      const task = await this.taskService.getTaskById(id);
      this.taskForm.patchValue(task);
    } catch (error) {
      console.error('Error loading task:', error);
    }
  }

  async onSubmit() {
    if (this.taskForm.valid) {
      try {
        if (this.taskId) {
          await this.taskService.updateTask(this.taskId, this.taskForm.value);
        } else {
          await this.taskService.addTask({
            ...this.taskForm.value,
            project_id: this.projectId,
          });
        }
        this.router.navigate([`/dashboard/projects/${this.projectId}`]);
      } catch (error) {
        console.error('Error saving task:', error);
      }
    }
  }
}
