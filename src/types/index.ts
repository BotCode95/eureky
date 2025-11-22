export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  status?: 'libre' | 'ocupado';
  category?: string;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  listName: string;
  listCategory: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface List {
  id: string;
  name: string;
  category: string;
  color?: string;
}
