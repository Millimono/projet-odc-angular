import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    {
      id: 1,
      name: 'Task 1',
      description: 'Description 1',
      details: 'Details of Task 1',
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Description 2',
      details: 'Details of Task 2',
    },
    // Ajoutez d'autres tâches ici
  ];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: any) {
    return this.tasks.find((task) => task.id === +id);
  }
}
