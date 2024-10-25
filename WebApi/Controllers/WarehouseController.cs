using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class WarehouseController : ControllerBase
{
    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll(int pageNumber = 1, int pageSize = 10)
    {
        return Ok();
    }

    [HttpGet("getById")]
    public async Task<IActionResult> GetById(int warehouseId)
    {
        return Ok();
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(WarehouseDto warehouse)
    {
        return Ok();
    }

    [HttpPut("update")]
    public async Task<IActionResult> Update(WarehouseDto warehouse)
    {
        return Ok();
    }


    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> Delete(int warehouseId)
    {
        return Ok();
    }

}
