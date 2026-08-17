namespace FreelanceFlow.Model;

public class Invoice
{
    public long Id { get; set; }
    public long ClientId { get; set; }
    public Client? Client { get; set; }
    public string InvoiceNumber { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Status { get; set; } = "Draft";
    public DateTime IssueDate { get; set; } = DateTime.UtcNow;
    public DateTime DueDate { get; set; }
}
