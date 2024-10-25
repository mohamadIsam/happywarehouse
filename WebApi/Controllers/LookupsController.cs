using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class LookupsController : ControllerBase
{

    [HttpGet("getCountries")]
    public IActionResult GetCountries()
    {
        return Ok();
    }

    [HttpGet("getRoles")]
    public IActionResult GetRoles()
    {
        return Ok();
    }
}
