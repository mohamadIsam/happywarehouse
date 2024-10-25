namespace Application.Config;

public class JwtConfig
{
    public int LifeTimeInMin { get; set; }
    public string SecretKey { get; set; }
    public string Issuer { get; set; }
    public string Audience { get; set; }
}
