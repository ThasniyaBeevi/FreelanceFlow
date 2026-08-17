namespace FreelanceFlow.Model;

public class Proposal
{
    public long Id { get; set; }
    public long ProjectId { get; set; }
    public Project? Project { get; set; }
    public string Title { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Status { get; set; } = "Draft";
    public DateTime SentAt { get; set; }
    public DateTime? AcceptedAt { get; set; }
}
