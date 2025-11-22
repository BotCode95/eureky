import { apiClient } from './client';
import type { Project, CreateProjectRequest, UpdateProjectRequest } from './types';

export const projectsApi = {
  async getAll(): Promise<Project[]> {
    return apiClient.get<Project[]>('/api/projects', true);
  },

  async getById(id: string): Promise<Project> {
    return apiClient.get<Project>(`/api/projects/${id}`, true);
  },

  async create(projectData: CreateProjectRequest): Promise<Project> {
    return apiClient.post<Project>('/api/projects', projectData, true);
  },

  async update(id: string, projectData: UpdateProjectRequest): Promise<Project> {
    return apiClient.put<Project>(`/api/projects/${id}`, projectData, true);
  },

  async delete(id: string): Promise<{ message: string }> {
    return apiClient.delete<{ message: string }>(`/api/projects/${id}`, true);
  },
};
