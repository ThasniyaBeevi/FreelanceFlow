import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private http = inject(HttpClient);
  private api = 'https://localhost:7235/api/Projects';
  getProjects(): Observable<Project[]> { return this.http.get<Project[]>(this.api); }
  createProject(project: Project): Observable<Project> { return this.http.post<Project>(this.api, project); }
  updateProject(id: number, project: Project): Observable<Project> { return this.http.put<Project>(`${this.api}/${id}`, project); }
  deleteProject(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
