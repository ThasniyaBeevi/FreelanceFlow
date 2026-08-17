# FreelanceFlow

FreelanceFlow is a portfolio-grade freelance business management application built with **ASP.NET Core 8 Web API, Angular 20, Entity Framework Core and PostgreSQL**.

## Product goal

Treat freelance work like a real business: keep client relationships organized, manage delivery work, track time, invoice accurately and get a fast view of cash flow.

## Showcase modules

- **Dashboard** — pipeline value, collected revenue, active projects, deadlines and recent activity.
- **Clients** — client/company profiles with contact information and lifecycle status.
- **Projects** — delivery pipeline with budgets, deadlines, status and progress.
- **Tasks** — project-level work breakdown with priorities and due dates.
- **Invoices** — invoice lifecycle, amounts, due dates and payment state.
- **Time tracking** — billable/non-billable hours linked to projects.

## Technical highlights

- Angular standalone components and lazy-friendly route structure.
- Reactive forms and validation for business workflows.
- Centralized Angular API service with typed HTTP contracts.
- ASP.NET Core REST endpoints with dependency injection and async EF Core access.
- PostgreSQL relational model with explicit relationships and money/time fields.
- Swagger/OpenAPI for API exploration.
- CORS configuration for local Angular development.
- Responsive SaaS-style shell with reusable cards, tables, badges and forms.
- Clear domain models so the project is easy to extend with authentication, role-based access, reporting and notifications.

## Local setup

### Backend

1. Create a PostgreSQL database.
2. Update the connection string in `FreelanceFlow/FreelanceFlow/appsettings.json`.
3. Open `FreelanceFlow/FreelanceFlow.sln` in Visual Studio and run the API.
4. Use the Swagger UI shown in Development to inspect the endpoints.

### Frontend

```bash
cd FreelanceFlow/FreelanceFlow.Client
npm install
npm start
```

Then open `http://localhost:4200`.

## Portfolio / interview talking points

This project is intentionally designed to demonstrate a complete full-stack workflow rather than a collection of isolated CRUD screens. It gives you concrete examples to discuss around REST design, EF Core relationships, PostgreSQL, dependency injection, async programming, Angular routing, typed services, reactive forms, validation, RxJS/HttpClient and responsive UI engineering.
