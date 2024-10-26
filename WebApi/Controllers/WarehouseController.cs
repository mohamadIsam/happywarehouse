using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class WarehouseController(IWarehouseService warehouseService) : ControllerBase
{
    [HttpGet("getAll")]
    public async Task<IActionResult> GetAll(int pageNumber = 1, int pageSize = 10)
    {
        var response = await warehouseService.GetAll(pageNumber, pageSize);
        return Ok(response);
    }

    [HttpGet("getById")]
    public async Task<IActionResult> GetById(int id)
    {
        var response = await warehouseService.GetById(id);
        return Ok(response);
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(WarehouseDto warehouse)
    {
        await warehouseService.Create(warehouse);
        return Ok();
    }

    [HttpPut("update")]
    public async Task<IActionResult> Update(WarehouseDto warehouse)
    {
        await warehouseService.Update(warehouse);
        return Ok();
    }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await warehouseService.Delete(id);
        return Ok();
    }

}
