using FreelanceFlow.Model;
using Microsoft.EntityFrameworkCore;

namespace FreelanceFlow.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Client> Clients => Set<Client>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Proposal> Proposals => Set<Proposal>();
    public DbSet<Invoice> Invoices => Set<Invoice>();
    public DbSet<TimeEntry> TimeEntries => Set<TimeEntry>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Client>().HasIndex(x => x.Email).IsUnique();
        modelBuilder.Entity<Project>().HasIndex(x => new { x.ClientId, x.Status });
        modelBuilder.Entity<Project>().Property(x => x.Budget).HasPrecision(18, 2);
        modelBuilder.Entity<Invoice>().Property(x => x.Amount).HasPrecision(18, 2);
        modelBuilder.Entity<Invoice>().HasIndex(x => x.InvoiceNumber).IsUnique();
        modelBuilder.Entity<TimeEntry>().Property(x => x.HourlyRate).HasPrecision(18, 2);

        modelBuilder.Entity<Project>()
            .HasOne(x => x.Client)
            .WithMany()
            .HasForeignKey(x => x.ClientId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Proposal>()
            .HasOne(x => x.Project)
            .WithMany(x => x.Proposals)
            .HasForeignKey(x => x.ProjectId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Invoice>()
            .HasOne(x => x.Client)
            .WithMany()
            .HasForeignKey(x => x.ClientId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
