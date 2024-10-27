using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Data;
using DataAccess.IRepositories;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public class ItemRepository : BaseRepository<Item>, IItemRepository
{
    private readonly ApplicationDbContext _context;

    public ItemRepository(ApplicationDbContext context) : base(context)
    {
        _context = context;
    }

    public IQueryable<Item> GetAllByWarehouseId(int id)
    {
        return _context.Items.Where(item => item.WarehouseId == id).AsQueryable();
    }
}
