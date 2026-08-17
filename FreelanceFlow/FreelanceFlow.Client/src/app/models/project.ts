export interface Project {
  id?: number;
  clientId: number;
  client?: { name: string; companyName: string };
  title: string;
  description: string;
  budget: number;
  status: 'Planning' | 'In Progress' | 'On Hold' | 'Completed';
  deadline: string;
  createdAt?: string;
}

export interface DashboardStats {
  clients: number;
  activeProjects: number;
  completedProjects: number;
  pipelineValue: number;
  invoiced: number;
  paid: number;
  trackedHours: number;
  upcomingDeadlines: { id: number; title: string; deadline: string; status: string }[];
}
