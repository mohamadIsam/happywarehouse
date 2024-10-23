using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Domain.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Data;

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
            NormalizedEmail = "ADMIN@HAPPYWAREHOUSE.COM",
            EmailConfirmed = true,
            SecurityStamp = Guid.NewGuid().ToString("D")
        };

        user.PasswordHash = hasher.HashPassword(user, "P@ssw0rd");
        modelBuilder.Entity<ApplicationUser>().HasData(user);


        modelBuilder.Entity<ApplicationUser>().ToTable("ApplicationUser");
        modelBuilder.Entity<ApplicationRole>().ToTable("ApplicationRole");
        modelBuilder.Entity<ApplicationUserClaim>().ToTable("ApplicationUserClaim");
        modelBuilder.Entity<ApplicationUserLogin>().ToTable("ApplicationUserLogin");
        modelBuilder.Entity<ApplicationUserRole>().ToTable("ApplicationUserRole");
        modelBuilder.Entity<ApplicationUserToken>().ToTable("ApplicationUserToken");
        modelBuilder.Entity<ApplicationRoleClaim>().ToTable("ApplicationRoleClaim");

    }
}