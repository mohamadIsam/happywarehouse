using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Application.Dto;

public class UserDto
{
    public int Id { get; set; }
    [Required]
    public string Email { get; set; }
    [Required]
    public string FullName { get; set; }
    [Required]
    public int RoleId { get; set; }
    [Required]
    public bool IsActive { get; set; }
}
