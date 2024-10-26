using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.IRepositories;
using DataAccess.IUnitOfWorks;
using DataAccess.Repositories;
using DataAccess.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace DataAccess.UnitOfWorks;

public class ApplicationUnitOfWork : IApplicationUnitOfWork
{
    private readonly ApplicationDbContext _appContext;
    private IDbContextTransaction _currentTransaction;

    public ICountryRepository CountryRepository { get; private set; }

    public IItemRepository ItemRepository { get; private set; }

    public IWarehouseRepository WarehouseRepository { get; private set; }

    public ApplicationUnitOfWork(ApplicationDbContext appContext)
    {
        _appContext = appContext;
        CountryRepository = new CountryRepository(_appContext);
        ItemRepository = new ItemRepository(_appContext);
        WarehouseRepository = new WarehouseRepository(_appContext);
    }

    public async Task BeginTransactionAsync()
    {
        if (_currentTransaction != null)
        {
            return;
        }

        _currentTransaction = await _appContext.Database.BeginTransactionAsync();
        await _appContext.Database.UseTransactionAsync(_currentTransaction.GetDbTransaction());
    }

    public async Task CommitTransactionAsync()
    {
        try
        {
            var appContextChanges = await _appContext.SaveChangesAsync();
            _currentTransaction?.Commit();
        }
        catch
        {
            await RollbackTransactionAsync();
            throw;
        }
        finally
        {
            if (_currentTransaction != null)
            {
                await _currentTransaction.DisposeAsync();
                _currentTransaction = null;
            }
        }
    }

    public async Task RollbackTransactionAsync()
    {
        try
        {
            await _currentTransaction?.RollbackAsync();
        }
        finally
        {
            if (_currentTransaction != null)
            {
                await _currentTransaction.DisposeAsync();
                _currentTransaction = null;
            }
        }
    }

    public void Dispose()
    {
        _appContext.Dispose();
    }
}
