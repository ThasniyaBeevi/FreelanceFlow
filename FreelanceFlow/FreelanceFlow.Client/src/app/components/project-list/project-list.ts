import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({selector:'app-project-list',standalone:true,imports:[CurrencyPipe,DatePipe,RouterLink],templateUrl:'./project-list.html'})
export class ProjectList implements OnInit {
  private service=inject(ProjectService); projects:Project[]=[]; loading=true;
  ngOnInit(){this.load()}
  load(){this.service.getProjects().subscribe({next:x=>{this.projects=x;this.loading=false},error:()=>this.loading=false})}
  remove(id:number){if(confirm('Delete this project?'))this.service.deleteProject(id).subscribe(()=>this.load())}
}
