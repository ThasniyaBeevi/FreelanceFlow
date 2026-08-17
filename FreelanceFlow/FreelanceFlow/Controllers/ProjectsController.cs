using FreelanceFlow.Data;
using FreelanceFlow.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FreelanceFlow.Controllers;

[ApiController, Route("api/[controller]")]
public class ProjectsController(ApplicationDbContext db) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Project>>> GetAll() => Ok(await db.Projects.Include(x => x.Client).OrderByDescending(x => x.CreatedAt).ToListAsync());

    [HttpGet("{id:long}")]
    public async Task<ActionResult<Project>> Get(long id)
    {
        var item = await db.Projects.Include(x => x.Client).Include(x => x.Proposals).FirstOrDefaultAsync(x => x.Id == id);
        return item is null ? NotFound() : Ok(item);
    }

    [HttpPost]
    public async Task<ActionResult<Project>> Create(Project project)
    {
        if (!await db.Clients.AnyAsync(x => x.Id == project.ClientId)) return BadRequest("Client does not exist.");
        project.CreatedAt = DateTime.UtcNow;
        db.Projects.Add(project);
        await db.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = project.Id }, project);
    }

    [HttpPut("{id:long}")]
    public async Task<ActionResult<Project>> Update(long id, Project input)
    {
        var item = await db.Projects.FindAsync(id);
        if (item is null) return NotFound();
        item.ClientId = input.ClientId; item.Title = input.Title; item.Description = input.Description;
        item.Budget = input.Budget; item.Status = input.Status; item.Deadline = input.Deadline;
        await db.SaveChangesAsync();
        return Ok(item);
    }

    [HttpDelete("{id:long}")]
    public async Task<IActionResult> Delete(long id)
    {
        var item = await db.Projects.FindAsync(id);
        if (item is null) return NotFound();
        db.Projects.Remove(item); await db.SaveChangesAsync(); return NoContent();
    }
}
