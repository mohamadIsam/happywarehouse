using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Data;
public class ApplicationIdentityDbContextFactory : IDesignTimeDbContextFactory<ApplicationIdentityDbContext>
{
    public ApplicationIdentityDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<ApplicationIdentityDbContext>();

        // Use the connection string from your appsettings.json
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../WebApi"))
            .AddJsonFile("appsettings.json")
            .Build();

        var connectionString = configuration.GetConnectionString("DefaultConnection");

        optionsBuilder.UseSqlite(connectionString);

        return new ApplicationIdentityDbContext(optionsBuilder.Options);
    }
}