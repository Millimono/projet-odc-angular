import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  async loadTasks() {
    try {
      this.tasks = await this.taskService.getTasks();
      console.log(this.tasks); // Vérifiez que les tâches sont bien récupérées
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  }

  viewDetails(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
