import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardStats } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private http = inject(HttpClient);
  private api = 'https://localhost:7235/api';
  getStats(): Observable<DashboardStats> { return this.http.get<DashboardStats>(`${this.api}/Dashboard`); }
}
