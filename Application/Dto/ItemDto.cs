using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Dto;
using System.ComponentModel.DataAnnotations;

public class ItemDto
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    public string? SKU { get; set; }
    [Required]
    [Range(1, int.MaxValue)]
    public int Qty { get; set; }
    [Required]
    public decimal CostPrice { get; set; }
    [Required]
    public decimal MSRPPrice { get; set; }
    [Required]
    public int WarehouseId { get; set; }
}
