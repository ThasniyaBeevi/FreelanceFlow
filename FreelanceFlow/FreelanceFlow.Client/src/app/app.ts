import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nav = [
    { label: 'Overview', icon: '⌂', route: '/' },
    { label: 'Clients', icon: '◎', route: '/clients' },
    { label: 'Projects', icon: '▦', route: '/projects' },
    { label: 'Tasks', icon: '✓', route: '/tasks' },
    { label: 'Invoices', icon: '▤', route: '/invoices' },
    { label: 'Time tracking', icon: '◷', route: '/time' }
  ];
}
