import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, DashboardStats, Invoice, Project, Task, TimeEntry } from '../models/freelance';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://localhost:7235/api';

  clients(): Observable<Client[]> { return this.http.get<Client[]>(`${this.baseUrl}/clients`); }
  createClient(value: Client): Observable<Client> { return this.http.post<Client>(`${this.baseUrl}/clients`, value); }
  projects(): Observable<Project[]> { return this.http.get<Project[]>(`${this.baseUrl}/projects`); }
  createProject(value: Project): Observable<Project> { return this.http.post<Project>(`${this.baseUrl}/projects`, value); }
  tasks(): Observable<Task[]> { return this.http.get<Task[]>(`${this.baseUrl}/tasks`); }
  invoices(): Observable<Invoice[]> { return this.http.get<Invoice[]>(`${this.baseUrl}/invoices`); }
  timeEntries(): Observable<TimeEntry[]> { return this.http.get<TimeEntry[]>(`${this.baseUrl}/time-entries`); }
  dashboard(): Observable<DashboardStats> { return this.http.get<DashboardStats>(`${this.baseUrl}/dashboard`); }
}
