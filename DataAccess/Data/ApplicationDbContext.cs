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

        modelBuilder.Entity<Country>().HasData(new Country
        {
            Id = 1,
            Name = "Jordan"
        },
        new Country
        {
            Id = 2,
            Name = "Syria"
        },
        new Country
        {
            Id = 3,
            Name = "Saudi Arabia"
        },
        new Country
        {
            Id = 4,
            Name = "Qatar"
        },
        new Country
        {
            Id = 5,
            Name = "Palestine"
        }
        );

        modelBuilder.Entity<Warehouse>(entity =>
        {
            entity.Property(e => e.Address).IsRequired();
            entity.Property(e => e.City).IsRequired();
            entity.Property(e => e.CountryId).IsRequired();
            entity.Property(e => e.Name).IsRequired();

            entity.HasKey(e => e.Id);
            entity.HasOne(e => e.Country).WithMany(e => e.Warehouses).HasForeignKey(e => e.CountryId);
            entity.HasIndex(e => e.Name).IsUnique();
        });

        modelBuilder.Entity<Item>(entity =>
        {
            entity.Property(e => e.Name).IsRequired();
            entity.Property(e => e.Qty).IsRequired();
            entity.HasCheckConstraint("CK_Item_Qty", "[Qty] >= 1");
            entity.Property(e => e.CostPrice).IsRequired();
            entity.Property(e => e.WarehouseId).IsRequired();

            entity.HasKey(e => e.Id);
            entity.HasOne(e => e.Warehouse).WithMany(e => e.Items).HasForeignKey(e => e.WarehouseId).OnDelete(DeleteBehavior.Cascade);
            entity.HasIndex(e => e.Name).IsUnique();
        });
    }
}