import { Injectable } from '@angular/core';
import { SupabaseService } from '../../supabase.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private supabaseService: SupabaseService) {}

  async getTasks() {
    const { data, error } = await this.supabaseService.client
      .from('tasks')
      .select('*');
    if (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
    return data;
  }

  async getTaskById(id: number) {
    const { data, error } = await this.supabaseService.client
      .from('tasks')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      console.error('Error fetching task by id:', error);
      throw error;
    }
    return data;
  }

  async getTasksByProjectId(projectId: number) {
    const { data, error } = await this.supabaseService.client
      .from('tasks')
      .select('*')
      .eq('project_id', projectId);
    if (error) {
      console.error('Error fetching tasks by project id:', error);
      throw error;
    }
    return data;
  }

  async addTask(task: any) {
    const { data, error } = await this.supabaseService.client
      .from('tasks')
      .insert(task);
    if (error) {
      console.error('Error adding task:', error);
      throw error;
    }
    return data;
  }

  async updateTask(id: number, task: any) {
    const { data, error } = await this.supabaseService.client
      .from('tasks')
      .update(task)
      .eq('id', id);
    if (error) {
      console.error('Error updating task:', error);
      throw error;
    }
    return data;
  }

  async deleteTask(id: number) {
    const { data, error } = await this.supabaseService.client
      .from('tasks')
      .delete()
      .eq('id', id);
    if (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
    return data;
  }
}
