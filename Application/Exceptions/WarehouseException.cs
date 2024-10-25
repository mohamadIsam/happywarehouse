using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Application.Exceptions;

public class WarehouseException : Exception
{
    public int StatusCode { get; private set; } = StatusCodes.Status500InternalServerError;

    public WarehouseException() : base() { }

    public WarehouseException(string message) : base(message) { }

    public WarehouseException(string message, int statusCode) : base(message)
    {
        StatusCode = statusCode;
    }

    public WarehouseException(string message, Exception inner, int statusCode) : base(message, inner)
    {
        StatusCode = statusCode;
    }
}
