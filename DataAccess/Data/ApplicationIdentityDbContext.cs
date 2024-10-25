using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Domain.Identity;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Data;

public class ApplicationIdentityDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, int, ApplicationUserClaim, ApplicationUserRole, ApplicationUserLogin, ApplicationRoleClaim, ApplicationUserToken>
{
    public ApplicationIdentityDbContext(DbContextOptions<ApplicationIdentityDbContext> options) : base(options)
    {
    }

    public DbSet<ApplicationUser> ApplicationUsers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        var hasher = new PasswordHasher<ApplicationUser>();
        var user = new ApplicationUser
        {
            Id = 1,
            UserName = "admin@happywarehouse.com",
            NormalizedUserName = "ADMIN@HAPPYWAREHOUSE.COM",
            Email = "admin@happywarehouse.com",
            FullName = "Admin",
            NormalizedEmail = "ADMIN@HAPPYWAREHOUSE.COM",
            EmailConfirmed = true,
            IsActive = true,
            SecurityStamp = Guid.NewGuid().ToString("D")
        };

        user.PasswordHash = hasher.HashPassword(user, "P@ssw0rd");
        modelBuilder.Entity<ApplicationUser>().HasData(user);

        modelBuilder.Entity<ApplicationRole>().HasData(
            new ApplicationRole { Id = 1, Name = "Admin", NormalizedName = "ADMIN" },
            new ApplicationRole { Id = 2, Name = "Management", NormalizedName = "MANAGEMENT" },
            new ApplicationRole { Id = 3, Name = "Auditor", NormalizedName = "AUDITOR" }
        );

        modelBuilder.Entity<ApplicationUserRole>().HasData(new ApplicationUserRole
        {
            UserId = 1,
            RoleId = 1
        });

        modelBuilder.Entity<ApplicationUser>(entity =>
        {
            entity.Property(e => e.Email).IsRequired();
            entity.Property(e => e.FullName).IsRequired();
            entity.Property(e => e.IsActive).IsRequired();
        });
        modelBuilder.Entity<ApplicationRole>();
        modelBuilder.Entity<ApplicationUserClaim>();
        modelBuilder.Entity<ApplicationUserLogin>();
        modelBuilder.Entity<ApplicationUserRole>();
        modelBuilder.Entity<ApplicationUserToken>();
        modelBuilder.Entity<ApplicationRoleClaim>();

    }
}