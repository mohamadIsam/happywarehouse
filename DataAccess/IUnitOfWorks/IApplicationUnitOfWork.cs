using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.IRepositories;

namespace DataAccess.IUnitOfWorks;

public interface IApplicationUnitOfWork : IDisposable
{
    ICountryRepository CountryRepository { get; }
    IItemRepository ItemRepository { get; }
    IWarehouseRespository WarehouseRespository { get; }

    Task BeginTransactionAsync();
    Task CommitTransactionAsync();
    Task RollbackTransactionAsync();
}
