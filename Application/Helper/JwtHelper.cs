using System.Text;
using Domain.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Application.Config;
using Microsoft.Extensions.Options;

namespace Application.Helper;

public class JwtHelper
{

    private readonly JwtConfig jwtConfig;
    private readonly UserManager<ApplicationUser> userManager;

    public JwtHelper(IOptions<JwtConfig> jwtConfig, UserManager<ApplicationUser> userManager)
    {
        this.jwtConfig = jwtConfig.Value;
        this.userManager = userManager;
    }

    public async Task<string> GenerateJwtToken(ApplicationUser user)
    {
        var expires = DateTime.UtcNow.AddMinutes(jwtConfig.LifeTimeInMin);
        var SecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfig.SecretKey));
        var credentials = new SigningCredentials(SecurityKey, SecurityAlgorithms.HmacSha256);


        List<Claim> claims = new List<Claim>()
        {
            new Claim(ClaimTypes.Sid, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Name, user.FullName),
        };

        var roles = await userManager.GetRolesAsync(user);
        foreach (var role in roles)
        {
            claims.Add(new Claim("role", role));
        }

        var securityToken = new JwtSecurityToken(
            issuer: jwtConfig.Issuer,
            audience: jwtConfig.Audience,
            claims: claims,
            expires: expires,
            signingCredentials: credentials
            );

        var accessToken = new JwtSecurityTokenHandler().WriteToken(securityToken);
        return accessToken;
    }

}
