using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain.Entities;

public class Warehouse : BaseEntity
{
    public string Name { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public int CountryId { get; set; }
    public Country Country { get; set; }
    public ICollection<Item> Items { get; set; }
}
