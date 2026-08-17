namespace FreelanceFlow.Model;

public class TimeEntry
{
    public long Id { get; set; }
    public long ProjectId { get; set; }
    public Project? Project { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Hours { get; set; }
    public decimal HourlyRate { get; set; }
    public DateTime WorkDate { get; set; } = DateTime.UtcNow;
    public decimal Total => Hours * HourlyRate;
}
