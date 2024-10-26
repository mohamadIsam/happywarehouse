using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Application.Exceptions;

namespace Application.Middlewares;

public class ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
{
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch (WarehouseException warehouseEx)
        {
            logger.LogError($"Warehouse exception: {warehouseEx.Message}");
            await HandleWarehouseExceptionAsync(context, warehouseEx);
        }
    }

    private Task HandleWarehouseExceptionAsync(HttpContext context, WarehouseException exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = exception.StatusCode;

        var response = new
        {
            StatusCode = exception.StatusCode,
            Message = exception.Message
        };

        return context.Response.WriteAsJsonAsync(response);
    }
}
