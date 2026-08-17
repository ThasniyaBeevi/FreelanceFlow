import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardStats } from '../../models/project';

@Component({ selector: 'app-dashboard', standalone: true, imports: [CurrencyPipe, DatePipe, DecimalPipe, RouterLink], templateUrl: './dashboard.html', styleUrl: './dashboard.css' })
export class Dashboard implements OnInit {
  private service = inject(DashboardService);
  stats: DashboardStats | null = null;
  loading = true;
  ngOnInit(): void { this.service.getStats().subscribe({ next: s => { this.stats = s; this.loading = false; }, error: () => this.loading = false }); }
}
