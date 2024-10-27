using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Application.IServices;
using Application.Dto;
using Application.Exceptions;
using DataAccess.IUnitOfWorks;
using Domain.Entities;
using AutoMapper;

namespace Application.Services;

public class WarehouseService(IApplicationUnitOfWork unitOfWork, IMapper mapper) : IWarehouseService
{
    public async Task<PaginatedResponse<WarehouseDto>> GetAll(int pageNumber, int pageSize)
    {
        pageNumber = pageNumber < 1 ? 1 : pageNumber;
        pageSize = pageSize < 1 ? 10 : pageSize;

        var query = unitOfWork.WarehouseRepository.GetAllWarehouses();
        var warehouseQuery = from warehouse in query
                             select new WarehouseDto
                             {
                                 Id = warehouse.Id,
                                 Name = warehouse.Name,
                                 Address = warehouse.Address,
                                 City = warehouse.City,
                                 CountryId = warehouse.CountryId,
                                 TotalItems = warehouse.Items.Count()
                             };

        var result = warehouseQuery.Skip((pageNumber - 1) * pageSize)
                                   .Take(pageSize).ToList();
        var total = unitOfWork.WarehouseRepository.GetAll().Count();
        var warehouses = mapper.Map<IEnumerable<WarehouseDto>>(result);
        return new PaginatedResponse<WarehouseDto>
        {
            Data = warehouses,
            PageNumber = pageNumber,
            PageSize = pageSize,
            TotalCount = total,
            TotalPages = (int)Math.Ceiling(total / (double)pageSize)
        };
    }

    public async Task<WarehouseDto> GetById(int id)
    {
        var result = await unitOfWork.WarehouseRepository.GetByIdAsync(id);
        return mapper.Map<WarehouseDto>(result);
    }

    public async Task Create(WarehouseDto warehouseDto)
    {
        var warehouse = mapper.Map<Warehouse>(warehouseDto);
        await unitOfWork.WarehouseRepository.AddAsync(warehouse);
    }

    public async Task Update(WarehouseDto warehouseDto)
    {
        var warehouse = await unitOfWork.WarehouseRepository.GetByIdAsync(warehouseDto.Id);
        if (warehouse == null)
        {
            throw new WarehouseException("warehouse-not-found.", StatusCodes.Status404NotFound);
        }
        mapper.Map(warehouseDto, warehouse);
        await unitOfWork.WarehouseRepository.UpdateAsync(warehouse);
    }

    public async Task Delete(int id)
    {
        var warehouse = await unitOfWork.WarehouseRepository.GetByIdAsync(id);
        await unitOfWork.WarehouseRepository.RemoveAsync(warehouse);
    }
}
