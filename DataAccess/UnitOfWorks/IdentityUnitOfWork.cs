using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.IUnitOfWorks;
using DataAccess.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace DataAccess.UnitOfWorks;

public class IdentityUnitOfWork : IIdentityUnitOfWork
{
    private readonly ApplicationIdentityDbContext _identityContext;
    private IDbContextTransaction _currentTransaction;

    public IdentityUnitOfWork(ApplicationIdentityDbContext identityContext)
    {
        _identityContext = identityContext;
    }

    public async Task BeginTransactionAsync()
    {
        if (_currentTransaction != null)
        {
            return;
        }

        _currentTransaction = await _identityContext.Database.BeginTransactionAsync();
        await _identityContext.Database.UseTransactionAsync(_currentTransaction.GetDbTransaction());
    }

    public async Task CommitTransactionAsync()
    {
        try
        {
            var identityContextChanges = await _identityContext.SaveChangesAsync();
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
        _identityContext.Dispose();
    }
}
