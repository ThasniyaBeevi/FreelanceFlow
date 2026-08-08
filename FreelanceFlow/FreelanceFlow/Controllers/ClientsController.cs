using System.Threading.Tasks;
using FreelanceFlow.Data;
using FreelanceFlow.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FreelanceFlow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public ClientsController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Client>>> GetClients()
        {
            var clients = await _dbContext.Clients.ToListAsync();
            return Ok(clients);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(long id)
        {
            if (id <= 0)
            {
                return BadRequest("Id required, Invalid Params");
            }
            var client = await _dbContext.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound("Client not found.");
            }
            return Ok(client);
        }
        [HttpPost]
        public async Task<ActionResult<Client>> CreateClient(Client client)
        {
            client.CreatedAt = DateTime.UtcNow;
            await _dbContext.Clients.AddAsync(client);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetClient), new { id = client.Id }, client);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Client>> UpdateClient(long id , Client client)
        {
            if (id <= 0)
            {
                return BadRequest("Id required, Invalid Params");
            }
            var data = await _dbContext.Clients.FindAsync(id);
            if (data == null)
            {
                return NotFound("Client not found.");
            }
            data.Name = client.Name;
            data.Email = client.Email;
            data.PhoneNumber = client.PhoneNumber;
            data.CompanyName = client.CompanyName;
            await _dbContext.SaveChangesAsync();
            return Ok(data);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteClient(long id)
        {
            if (id <= 0)
            {
                return BadRequest("Id required, Invalid Params");
            }
            var data = await _dbContext.Clients.FindAsync(id);
            if (data == null)
            {
                return NotFound("Client not found.");
            }
            _dbContext.Clients.Remove(data);
            await _dbContext.SaveChangesAsync();
            return Ok("client deleted successfully");
        }
    }
}
