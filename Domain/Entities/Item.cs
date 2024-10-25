using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain.Entities;

public class Item : BaseEntity
{
    public string Name { get; set; }
    public string? SKU { get; set; }
    public int Qty { get; set; }
    public decimal CostPrice { get; set; }
    public decimal MSRPPrice { get; set; }
    public int WarehouseId { get; set; }
    public Warehouse Warehouse { get; set; }
}
