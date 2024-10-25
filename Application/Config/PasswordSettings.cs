using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Config;

public class PasswordSettings
{
    public string Password { get; set; }
    public int ExpiredInDays { get; set; }
    public int ForgetExpiredInMinutes { get; set; }
}
