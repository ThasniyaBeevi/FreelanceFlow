import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({selector:'app-client-list',standalone:true,imports:[RouterLink],templateUrl:'./client-list.html',styleUrl:'./client-list.css'})
export class ClientList implements OnInit {
 private clientService=inject(ClientService); clients:Client[]=[]; loading=true; error='';
 ngOnInit(){this.clientService.getClients().subscribe({next:data=>{this.clients=data;this.loading=false},error:()=>{this.error='Unable to load clients';this.loading=false}})}
}
