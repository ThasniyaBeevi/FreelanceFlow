import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { ProjectService } from '../../services/project.service';

@Component({selector:'app-project-form',standalone:true,imports:[ReactiveFormsModule,RouterLink],templateUrl:'./project-form.html'})
export class ProjectForm implements OnInit {
 private fb=inject(FormBuilder); private clients=inject(ClientService); private projects=inject(ProjectService); private router=inject(Router);
 clientOptions:any[]=[];
 form=this.fb.nonNullable.group({clientId:[0,Validators.min(1)],title:['',Validators.required],description:[''],budget:[0,[Validators.required,Validators.min(0)]],status:['Planning'],deadline:['',Validators.required]});
 ngOnInit(){this.clients.getClients().subscribe(x=>this.clientOptions=x)}
 submit(){if(this.form.invalid){this.form.markAllAsTouched();return}this.projects.createProject(this.form.getRawValue() as any).subscribe(()=>this.router.navigate(['/projects']))}
}
