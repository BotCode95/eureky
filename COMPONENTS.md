# 📚 Components Documentation

## Atoms

### Avatar
User avatar with online status indicator.

**Props:**
- `src?: string` - Image URL
- `alt?: string` - Alt text (default: "User")
- `online?: boolean` - Show online status indicator
- `size?: 'sm' | 'md' | 'lg'` - Avatar size

**Usage:**
```tsx
<Avatar online size="sm" />
<Avatar src="/path/to/image.jpg" alt="John Doe" online size="md" />
```

---

### Button
Flexible button component with variants.

**Props:**
- `variant?: 'primary' | 'secondary' | 'ghost' | 'icon'`
- `size?: 'sm' | 'md' | 'lg'`
- `className?: string`
- All native button props

**Usage:**
```tsx
<Button variant="primary" size="md">Click me</Button>
<Button variant="ghost" onClick={handleClick}>Ghost Button</Button>
```

---

### Checkbox
Custom checkbox with round design.

**Props:**
- `checked: boolean` - Checked state
- `onChange: (checked: boolean) => void` - Change handler
- `id?: string` - Input ID

**Usage:**
```tsx
<Checkbox checked={isChecked} onChange={setIsChecked} id="task-1" />
```

---

### Badge
Small badge for status indicators.

**Props:**
- `children: React.ReactNode` - Badge content
- `variant?: 'default' | 'purple' | 'success'`
- `className?: string`

**Usage:**
```tsx
<Badge variant="purple">Libre</Badge>
<Badge variant="success">Online</Badge>
```

---

## Molecules

### TopBar
Mobile header with avatar, logo, and menu.

**Props:**
- `onMenuClick?: () => void` - Menu button click handler

**Usage:**
```tsx
<TopBar onMenuClick={() => console.log('Menu clicked')} />
```

---

### DateBox
Calendar date display box.

**Props:**
- `month: string` - Month abbreviation (e.g., "MAR")
- `day: number` - Day number

**Usage:**
```tsx
<DateBox month="MAR" day={21} />
```

---

### EventItem
Single calendar event row.

**Props:**
- `event: CalendarEvent` - Event object with id, title, startTime, endTime, status

**Usage:**
```tsx
<EventItem event={{
  id: '1',
  title: 'Meeting',
  startTime: '11:00',
  endTime: '12:00',
  status: 'libre'
}} />
```

---

### TaskItem
Single task item with checkbox and metadata.

**Props:**
- `task: Task` - Task object
- `onToggle: (id: string) => void` - Toggle completion handler
- `onMoreClick?: (id: string) => void` - More options handler

**Usage:**
```tsx
<TaskItem 
  task={taskObject}
  onToggle={handleToggle}
  onMoreClick={handleMore}
/>
```

---

### InputBar
Input field with optional action button.

**Props:**
- `placeholder?: string` - Input placeholder
- `onSubmit?: (value: string) => void` - Submit handler
- `actionButton?: React.ReactNode` - Optional action button

**Usage:**
```tsx
<InputBar 
  placeholder="Add task"
  onSubmit={handleAddTask}
  actionButton={<Button>+</Button>}
/>
```

---

## Organisms

### CalendarSection
Complete calendar section with date and events.

**Props:**
- `date: { month: string; day: number }` - Date object
- `events?: CalendarEvent[]` - Array of events
- `onConnectCalendar?: () => void` - Connect calendar handler

**Usage:**
```tsx
<CalendarSection
  date={{ month: 'MAR', day: 21 }}
  events={eventsArray}
  onConnectCalendar={handleConnect}
/>
```

---

### TaskList
List of tasks with empty state.

**Props:**
- `tasks: Task[]` - Array of tasks
- `onToggleTask: (id: string) => void` - Toggle handler
- `onMoreClick?: (id: string) => void` - More options handler

**Usage:**
```tsx
<TaskList
  tasks={tasksArray}
  onToggleTask={handleToggle}
  onMoreClick={handleMore}
/>
```

---

### BottomNavigation
Mobile bottom navigation bar.

**Props:**
- `activeId?: string` - Currently active nav item ID
- `onNavigate?: (id: string) => void` - Navigation handler

**Usage:**
```tsx
<BottomNavigation 
  activeId="home"
  onNavigate={handleNavigate}
/>
```

---

### Sidebar
Desktop sidebar navigation.

**Props:**
- `userName?: string` - User name
- `userEmail?: string` - User email
- `activeId?: string` - Active nav item
- `onNavigate?: (id: string) => void` - Navigation handler
- `lists?: Array<{ id: string; name: string; category: string }>` - Custom lists

**Usage:**
```tsx
<Sidebar
  userName="Roger"
  userEmail="roger@example.com"
  activeId="home"
  onNavigate={handleNavigate}
  lists={customLists}
/>
```

---

## Layout

### MainLayout
Main application layout with sidebar and content area.

**Props:**
- `children: React.ReactNode` - Page content
- `showSidebar?: boolean` - Show/hide sidebar (default: true)
- `activeNavId?: string` - Active navigation item
- `onNavigate?: (id: string) => void` - Navigation handler

**Usage:**
```tsx
<MainLayout activeNavId="home" onNavigate={handleNavigate}>
  <YourPageContent />
</MainLayout>
```

---

## Hooks

### useAppData
Custom hook for managing app state (tasks, events).

**Returns:**
- `tasks: Task[]` - Array of tasks
- `events: CalendarEvent[]` - Array of calendar events
- `hasCalendar: boolean` - Calendar connection status
- `toggleTask: (id: string) => void` - Toggle task completion
- `addTask: (title: string) => void` - Add new task
- `connectCalendar: () => void` - Connect calendar

**Usage:**
```tsx
const { tasks, events, toggleTask, addTask } = useAppData();
```

---

## Types

### CalendarEvent
```typescript
interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  status?: 'libre' | 'ocupado';
  category?: string;
}
```

### Task
```typescript
interface Task {
  id: string;
  title: string;
  completed: boolean;
  listName: string;
  listCategory: string;
}
```

### NavItem
```typescript
interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}
```

### List
```typescript
interface List {
  id: string;
  name: string;
  category: string;
  color?: string;
}
```
