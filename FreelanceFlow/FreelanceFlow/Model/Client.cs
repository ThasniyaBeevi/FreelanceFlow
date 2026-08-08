using System.ComponentModel.DataAnnotations;

namespace FreelanceFlow.Model
{
    public class Client
    {
        [Key]
        public long Id {  get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string CompanyName { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
