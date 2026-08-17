using FreelanceFlow.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FreelanceFlow.Controllers;

[ApiController, Route("api/[controller]")]
public class DashboardController(ApplicationDbContext db) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var projects = await db.Projects.ToListAsync();
        var invoices = await db.Invoices.ToListAsync();
        var hours = await db.TimeEntries.SumAsync(x => (decimal?)x.Hours) ?? 0;
        return Ok(new {
            clients = await db.Clients.CountAsync(),
            activeProjects = projects.Count(x => x.Status == "In Progress"),
            completedProjects = projects.Count(x => x.Status == "Completed"),
            pipelineValue = projects.Where(x => x.Status != "Completed").Sum(x => x.Budget),
            invoiced = invoices.Sum(x => x.Amount),
            paid = invoices.Where(x => x.Status == "Paid").Sum(x => x.Amount),
            trackedHours = hours,
            upcomingDeadlines = projects.Where(x => x.Deadline >= DateTime.UtcNow).OrderBy(x => x.Deadline).Take(5)
                .Select(x => new { x.Id, x.Title, x.Deadline, x.Status })
        });
    }
}
