import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { ClientList } from './components/client-list/client-list';
import { ClientForm } from './components/client-form/client-form';
import { ProjectList } from './components/project-list/project-list';
import { ProjectForm } from './components/project-form/project-form';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'Overview · FreelanceFlow' },
  { path: 'clients', component: ClientList, title: 'Clients · FreelanceFlow' },
  { path: 'clients/new', component: ClientForm, title: 'New Client · FreelanceFlow' },
  { path: 'projects', component: ProjectList, title: 'Projects · FreelanceFlow' },
  { path: 'projects/new', component: ProjectForm, title: 'New Project · FreelanceFlow' },
  { path: 'tasks', loadComponent: () => import('./components/workspace-page/workspace-page').then(m => m.WorkspacePage), data: { section: 'Tasks', description: 'Break projects into clear, actionable work.' } },
  { path: 'invoices', loadComponent: () => import('./components/workspace-page/workspace-page').then(m => m.WorkspacePage), data: { section: 'Invoices', description: 'Track billing status and payment deadlines.' } },
  { path: 'time', loadComponent: () => import('./components/workspace-page/workspace-page').then(m => m.WorkspacePage), data: { section: 'Time tracking', description: 'Keep billable hours and project effort in one place.' } },
  { path: '**', redirectTo: '' }
];
