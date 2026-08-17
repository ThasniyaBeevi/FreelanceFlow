import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-workspace-page',
  template: `
    <section class="workspace-page">
      <div class="workspace-hero">
        <div><span class="eyebrow">WORKSPACE</span><h1>{{ section }}</h1><p>{{ description }}</p></div>
        <a routerLink="/" class="secondary">Back to overview</a>
      </div>
      <div class="feature-grid">
        <article class="feature-card"><span class="feature-icon">✓</span><h2>Ready for the next workflow</h2><p>This module is wired into the application shell and route structure, ready for typed API data and business actions.</p></article>
        <article class="feature-card"><span class="feature-icon">↗</span><h2>Built to extend cleanly</h2><p>Add controllers, EF Core entities and Angular services without changing the surrounding navigation or layout.</p></article>
        <article class="feature-card"><span class="feature-icon">▤</span><h2>Portfolio-ready architecture</h2><p>The section is intentionally separated so you can demonstrate routing, reusable UI, API contracts and domain-driven expansion.</p></article>
      </div>
    </section>
  `,
  styles: [`
    .workspace-page{max-width:1240px;margin:auto}.workspace-hero{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:24px}.eyebrow{font-size:10px;letter-spacing:.14em;font-weight:800;color:#6657e8}.workspace-hero h1{font-size:32px;margin:8px 0}.workspace-hero p{color:#74788a;margin:0}.secondary{padding:10px 14px;border:1px solid #e4e6ed;border-radius:10px;text-decoration:none;color:#50546a;background:#fff;font-size:12px;font-weight:700}.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.feature-card{background:#fff;border:1px solid #e6e8ef;border-radius:16px;padding:24px;box-shadow:0 12px 35px rgba(35,31,73,.05)}.feature-icon{width:36px;height:36px;border-radius:10px;background:#efedff;color:#5f52d4;display:grid;place-items:center;font-weight:800}.feature-card h2{font-size:17px;margin:20px 0 8px}.feature-card p{color:#74788a;line-height:1.7;font-size:13px;margin:0}@media(max-width:800px){.feature-grid{grid-template-columns:1fr}.workspace-hero{align-items:flex-start;flex-direction:column}}
  `]
})
export class WorkspacePage {
  private route = inject(ActivatedRoute);
  section = this.route.snapshot.data['section'] as string;
  description = this.route.snapshot.data['description'] as string;
}
