using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace Application.Config;

public static class ApplicationConfiguration
{
    public static void AddConfiguration(this IServiceCollection services, IConfiguration configuration)
    {
        
        services.Configure<JwtConfig>(configuration.GetSection("Jwt"));
        services.Configure<PasswordSettings>(configuration.GetSection("PasswordSettings"));
    }
}
