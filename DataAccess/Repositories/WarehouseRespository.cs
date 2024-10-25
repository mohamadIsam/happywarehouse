using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.IRepositories;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public class WarehouseRespository : BaseRepository<Warehouse>, IWarehouseRespository
{
    public WarehouseRespository(DbContext context) : base(context)
    {
    }
}
