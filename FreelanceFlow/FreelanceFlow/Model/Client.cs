using System.ComponentModel.DataAnnotations;

namespace FreelanceFlow.Model;

public class Client
{
    [Key] public long Id { get; set; }
    [Required, MaxLength(120)] public string Name { get; set; } = string.Empty;
    [Required, EmailAddress, MaxLength(180)] public string Email { get; set; } = string.Empty;
    [MaxLength(30)] public string PhoneNumber { get; set; } = string.Empty;
    [MaxLength(160)] public string CompanyName { get; set; } = string.Empty;
    [MaxLength(500)] public string Notes { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
