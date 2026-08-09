import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-form',
  imports: [ReactiveFormsModule],
  templateUrl: './client-form.html',
  styleUrl: './client-form.css'
})
export class ClientForm {

  private fb = inject(FormBuilder);
  private clientService = inject(ClientService);
  clientForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: [''],
    companyName: ['']
  });
  onSubmit(): void {
    if (this.clientForm.invalid) {
      this.clientForm.markAllAsTouched();
      return;
    }

    const client = this.clientForm.getRawValue() as Client;

    this.clientService.createClient(client).subscribe({
      next: (data) => {
        console.log('Client created:', data);
      },
      error: (error) => {
        console.error('Error creating client:', error);
      }
    });
}
}