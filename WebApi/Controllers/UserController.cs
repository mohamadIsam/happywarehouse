using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Application.Dto;
using Application.IServices;

namespace WebApi.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class UserController(IUserService userService) : ControllerBase
{
    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll(int pageNumber = 1, int pageSize = 10)
    {
        var result = await userService.GetAll(pageNumber, pageSize);
        return Ok(result);
    }

    [HttpGet("getById/{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await userService.GetById(id);
        return Ok(result);
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateUser(UserDto user)
    {
        await userService.CreateUser(user);
        return Ok();
    }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        await userService.DeleteUser(id);
        return Ok();
    }

    [HttpPut("update")]
    public async Task<IActionResult> UpdateUser(UserDto user)
    {
        await userService.UpdateUser(user);
        return Ok();
    }
}
