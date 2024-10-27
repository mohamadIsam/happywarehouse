using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.IServices;
using Application.Dto;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController(IAuthService authService) : ControllerBase
{
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto login)
    {
        var result = await authService.Login(login);
        return Ok(result);
    }

    [Authorize]
    [HttpPost("changePassword")]
    public async Task<IActionResult> ChangePassword(ChangePasswordDto changePassword)
    {
        var result = await authService.ChangePassword(changePassword);
        return Ok(result);
    }
}
