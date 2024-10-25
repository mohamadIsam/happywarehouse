using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ItemController : ControllerBase
{

    [HttpGet("getAll")]
    public IActionResult GetAll()
    {
        return Ok();
    }

    [HttpPut("update")]
    public IActionResult Update()
    {
        return Ok();
    }
}
