using Microsoft.AspNetCore.Identity;

namespace Domain.Identity;

public class ApplicationUser : IdentityUser<int>
{
    public string FullName { get; set; }
    public bool IsActive { get; set; }
}
