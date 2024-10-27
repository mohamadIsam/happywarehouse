using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace WebApi.Controllers;

[ApiController]
[Authorize(Roles = "Admin")]
[Route("api/[controller]")]
public class LogController : ControllerBase
{
    private readonly string logDirectory;

    public LogController(IConfiguration configuration)
    {
        logDirectory = configuration["Serilog:LogFilePath"];
    }

    [HttpGet("files")]
    public IActionResult GetLogFiles()
    {
        if (!Directory.Exists(logDirectory))
        {
            throw new WarehouseException("log-not-found", StatusCodes.Status404NotFound);
        }

        var logFiles = Directory.GetFiles(logDirectory, "*.log")
            .Select(file => new FileInfo(file))
            .Select(fileInfo => new
            {
                Name = fileInfo.Name,
                Size = fileInfo.Length,
                LastModified = fileInfo.LastWriteTime
            })
            .ToList();

        return Ok(logFiles);
    }

    [HttpGet()]
    public async Task<IActionResult> GetCurrentLogData()
    {
        var logFiles = Directory.GetFiles(logDirectory, "*.log");
        if (logFiles.Length == 0)
        {
            throw new WarehouseException("log-not-found", StatusCodes.Status404NotFound);
        }
        var latestLogFile = logFiles
           .Select(f => new FileInfo(f))
           .OrderByDescending(f => f.LastWriteTime)
           .First();

        var lines = await System.IO.File.ReadAllLinesAsync(latestLogFile.FullName);
        var currentLogData = lines.Skip(Math.Max(0, lines.Length - 100)).ToList();
        return Ok(currentLogData);
    }
}
