export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role?: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface Project {
  _id: string;
  name: string;
  description: string;
  userId: string;
  status: 'active' | 'archived' | 'completed';
  createdAt: string;
  updatedAt: string;
  tasks?: Task[];
}

export interface CreateProjectRequest {
  name: string;
  description: string;
  status?: 'active' | 'archived' | 'completed';
}

export interface UpdateProjectRequest {
  name?: string;
  description?: string;
  status?: 'active' | 'archived' | 'completed';
}

export interface Task {
  _id: string;
  name: string;
  description: string;
  projectId: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskRequest {
  name: string;
  description: string;
  projectId: string;
  status?: 'todo' | 'in-progress' | 'done';
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
}

export interface UpdateTaskRequest {
  name?: string;
  description?: string;
  status?: 'todo' | 'in-progress' | 'done';
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
}
