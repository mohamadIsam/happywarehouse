using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;

namespace DataAccess.IRepositories;

public interface IItemRepository : IBaseRepository<Item>
{
    IQueryable<Item> GetAllByWarehouseId(int id);
}
