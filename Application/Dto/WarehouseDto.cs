using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Application.Dto;

public class WarehouseDto
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string Address { get; set; }
    [Required]
    public string City { get; set; }
    [Required]
    public int CountryId { get; set; }
    public int TotalItems { get; set; }
}