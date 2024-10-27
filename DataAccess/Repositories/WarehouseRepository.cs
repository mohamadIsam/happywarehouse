using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Data;
using DataAccess.IRepositories;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public class WarehouseRepository : BaseRepository<Warehouse>, IWarehouseRepository
{
    private readonly ApplicationDbContext _context;
    public WarehouseRepository(ApplicationDbContext context) : base(context)
    {
        _context = context;
    }

    public IQueryable<Warehouse> GetAllWarehouses()
    {
        var result = _context.Warehouses.AsQueryable();
        var query = from item in result
            select new
            {
                Item = item,
                ItemCount = item.Items.Count()
            };

        return _context.Warehouses.AsQueryable();
    }
}
