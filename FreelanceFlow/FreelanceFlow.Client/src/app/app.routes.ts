import { Routes } from '@angular/router';
import { ClientList } from './components/client-list/client-list';
import { ClientForm } from './components/client-form/client-form';

export const routes: Routes = [
  {
    path: 'clients',
    component: ClientList
  },
  {
    path: 'clients/new',
    component: ClientForm
  },
  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full'
  }
];