import { Injectable } from '@angular/core';
import { SupabaseService } from '../../supabase.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private supabaseService: SupabaseService) {}

  async getProjects() {
    const { data, error } = await this.supabaseService.client
      .from('projects')
      .select('*');
    if (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
    return data;
  }

  async getProjectById(id: number) {
    const { data, error } = await this.supabaseService.client
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      console.error('Error fetching project by id:', error);
      throw error;
    }
    return data;
  }

  async addProject(project: any) {
    const { data, error } = await this.supabaseService.client
      .from('projects')
      .insert(project);
    if (error) {
      console.error('Error adding project:', error);
      throw error;
    }
    return data;
  }

  async updateProject(id: number, project: any) {
    const { data, error } = await this.supabaseService.client
      .from('projects')
      .update(project)
      .eq('id', id);
    if (error) {
      console.error('Error updating project:', error);
      throw error;
    }
    return data;
  }

  async deleteProject(id: number) {
    const { data, error } = await this.supabaseService.client
      .from('projects')
      .delete()
      .eq('id', id);
    if (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
    return data;
  }
}
