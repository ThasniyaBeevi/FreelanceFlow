export type ProjectStatus = 'Planning' | 'In Progress' | 'On Hold' | 'Completed';
export type TaskStatus = 'Todo' | 'In Progress' | 'Review' | 'Done';
export type InvoiceStatus = 'Draft' | 'Sent' | 'Partially Paid' | 'Paid' | 'Overdue';

export interface Client {
  id?: number;
  name: string;
  companyName: string;
  email: string;
  phone?: string;
  industry?: string;
  notes?: string;
  status: 'Active' | 'Archived';
  createdAt?: string;
}

export interface Project {
  id?: number;
  clientId: number;
  client?: Pick<Client, 'name' | 'companyName'>;
  title: string;
  description: string;
  budget: number;
  status: ProjectStatus;
  deadline: string;
  progress: number;
  createdAt?: string;
}

export interface Task {
  id?: number;
  projectId: number;
  title: string;
  status: TaskStatus;
  priority: 'Low' | 'Medium' | 'High';
  estimatedHours: number;
  dueDate?: string;
}

export interface Invoice {
  id?: number;
  projectId: number;
  invoiceNumber: string;
  amount: number;
  status: InvoiceStatus;
  issuedOn: string;
  dueOn: string;
  paidOn?: string;
}

export interface TimeEntry {
  id?: number;
  projectId: number;
  date: string;
  hours: number;
  description: string;
  billable: boolean;
}

export interface DashboardStats {
  clients: number;
  activeProjects: number;
  completedProjects: number;
  pipelineValue: number;
  invoiced: number;
  paid: number;
  trackedHours: number;
  utilization: number;
  upcomingDeadlines: { id: number; title: string; deadline: string; status: string }[];
  recentActivity: { type: string; title: string; detail: string; date: string }[];
}
