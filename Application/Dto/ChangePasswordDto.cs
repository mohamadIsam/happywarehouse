using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Dto;

public class ChangePasswordDto
{
    public int Id { get; set; }
    public string CurrentPassword { get; set; }
    public string NewPassword { get; set; }
    public string RepeatPassword { get; set; }
}
