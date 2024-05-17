import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1',
      details: 'Details of Project 1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description 2',
      details: 'Details of Project 2',
    },
    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1',
      details: 'Details of Project 1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description 2',
      details: 'Details of Project 2',
    },
    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1',
      details: 'Details of Project 1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description 2',
      details: 'Details of Project 2',
    },

    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1',
      details: 'Details of Project 1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description 2',
      details: 'Details of Project 2',
    },
    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1',
      details: 'Details of Project 1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description 2',
      details: 'Details of Project 2',
    },
    // Ajoutez d'autres projets ici
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: any) {
    return this.projects.find((project) => project.id === +id);
  }
}
