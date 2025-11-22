import { apiClient } from './client';
import type { Task, CreateTaskRequest, UpdateTaskRequest } from './types';

export const tasksApi = {
  async getByProject(projectId: string): Promise<Task[]> {
    return apiClient.get<Task[]>(`/api/tasks/project/${projectId}`, true);
  },

  async getById(id: string): Promise<Task> {
    return apiClient.get<Task>(`/api/tasks/${id}`, true);
  },

  async create(taskData: CreateTaskRequest): Promise<Task> {
    return apiClient.post<Task>('/api/tasks', taskData, true);
  },

  async update(id: string, taskData: UpdateTaskRequest): Promise<Task> {
    return apiClient.put<Task>(`/api/tasks/${id}`, taskData, true);
  },

  async delete(id: string): Promise<{ message: string }> {
    return apiClient.delete<{ message: string }>(`/api/tasks/${id}`, true);
  },
};
