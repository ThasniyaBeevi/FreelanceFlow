import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { ClientList } from './components/client-list/client-list';
import { ClientForm } from './components/client-form/client-form';
import { ProjectList } from './components/project-list/project-list';
import { ProjectForm } from './components/project-form/project-form';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'clients', component: ClientList },
  { path: 'clients/new', component: ClientForm },
  { path: 'projects', component: ProjectList },
  { path: 'projects/new', component: ProjectForm },
  { path: '**', redirectTo: '' }
];
