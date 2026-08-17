# FreelanceFlow

A portfolio-grade freelance business management platform built to demonstrate modern full-stack development with **ASP.NET Core 8 Web API + Angular 20 + PostgreSQL + Entity Framework Core**.

## What it demonstrates

- Angular standalone components, routing, reactive forms and RxJS/HttpClient
- ASP.NET Core REST APIs with dependency injection and async EF Core data access
- PostgreSQL persistence with indexes, relationships and decimal precision
- Client and project CRUD workflows
- Dashboard analytics for pipeline, revenue and tracked hours
- Clean separation between models, API controllers, data access and Angular services
- Responsive application shell and professional SaaS-style UI
- Swagger/OpenAPI for API exploration

## Modules

**Dashboard** — client count, active/completed projects, pipeline value, paid revenue and upcoming deadlines.

**Clients** — create and browse freelance clients.

**Projects** — create, browse and delete projects, with client, budget, status and deadline tracking.

**Backend foundation** — proposals, invoices and time entries are modeled for the next workflow expansion.

## Run locally

### Backend
1. Create a PostgreSQL database and update `FreelanceFlow/FreelanceFlow/appsettings.json`.
2. Open `FreelanceFlow/FreelanceFlow.sln` in Visual Studio.
3. Run the ASP.NET Core API. Swagger is available in Development.

### Frontend
```bash
cd FreelanceFlow/FreelanceFlow.Client
npm install
npm start
```

Open `http://localhost:4200`.

## Portfolio talking points

This project is intentionally designed as an interview-ready showcase: RESTful APIs, EF Core relationships, PostgreSQL, CORS, dependency injection, async programming, Angular routing, reactive forms, reusable services, RxJS subscriptions and responsive UI are all visible in one realistic product.
