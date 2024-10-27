using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dto;

namespace Application.IServices;

public interface IAuthService
{
    Task<string> Login(LoginDto login);
    Task<string> ChangePassword(ChangePasswordDto changePassword);
}
