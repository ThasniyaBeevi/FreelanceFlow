namespace FreelanceFlow.Model;

public class Project
{
    public long Id { get; set; }
    public long ClientId { get; set; }
    public Client? Client { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Budget { get; set; }
    public string Status { get; set; } = "Planning";
    public DateTime Deadline { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public ICollection<Proposal> Proposals { get; set; } = new List<Proposal>();
}
