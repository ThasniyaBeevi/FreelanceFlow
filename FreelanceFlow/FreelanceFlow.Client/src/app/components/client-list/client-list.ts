import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css'
})
export class ClientList implements OnInit {

  private clientService = inject(ClientService);

  clients: Client[] = [];

  ngOnInit(): void {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
        console.log('Clients:', this.clients);
      },
      error: (error) => {
        console.error('Error loading clients:', error);
      }
    });
  }
}