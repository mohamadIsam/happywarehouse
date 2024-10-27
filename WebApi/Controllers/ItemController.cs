using Application.Dto;
using Application.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ItemController(IItemService itemService) : ControllerBase
{

    [HttpGet("getAll/{warehouseId}")]
    public async Task<IActionResult> GetAll(int warehouseId, int pageNumber = 1, int pageSize = 10)
    {
        var response = await itemService.GetAll(warehouseId, pageNumber, pageSize);
        return Ok(response);
    }

    [HttpGet("getById/{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var response = await itemService.GetById(id);
        return Ok(response);
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(ItemDto item)
    {
        await itemService.Create(item);
        return Ok();
    }

    [HttpPut("update")]
    public async Task<IActionResult> Update(ItemDto item)
    {
        await itemService.Update(item);
        return Ok();
    }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await itemService.Delete(id);
        return Ok();
    }
}
