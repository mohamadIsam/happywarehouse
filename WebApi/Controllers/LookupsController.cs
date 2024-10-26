using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Application.IServices;

namespace WebApi.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class LookupsController(ILookupService lookupService) : ControllerBase
{

    [HttpGet("getCountries")]
    public async Task<IActionResult> GetCountries()
    {
        var result = await lookupService.GetCountries();
        return Ok(result);
    }

    [HttpGet("getRoles")]
    public IActionResult GetRoles()
    {
        var result = lookupService.GetRoles();
        return Ok(result);
    }
}
