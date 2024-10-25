using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Country> Countries { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<Warehouse> Warehouses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Country>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired();
        });

        modelBuilder.Entity<Warehouse>(entity =>
        {
            entity.Property(e => e.Address).IsRequired();
            entity.Property(e => e.City).IsRequired();
            entity.Property(e => e.CountryId).IsRequired();
            entity.Property(e => e.Name).IsRequired().IsUnicode();

            entity.HasKey(e => e.Id);
            entity.HasOne(e => e.Country).WithOne(e => e.Warehouse).HasForeignKey<Warehouse>(e => e.CountryId);
        });

        modelBuilder.Entity<Item>(entity =>
        {
            entity.Property(e => e.Name).IsRequired().IsUnicode();
            entity.Property(e => e.Qty).IsRequired();
            entity.HasCheckConstraint("CK_Item_Qty", "[Qty] > 1");
            entity.Property(e => e.CostPrice).IsRequired();
            entity.Property(e => e.WarehouseId).IsRequired();

            entity.HasKey(e => e.Id);
            entity.HasOne(e => e.Warehouse).WithMany(e => e.Items).HasForeignKey(e => e.WarehouseId).OnDelete(DeleteBehavior.Cascade);
        });
    }
}