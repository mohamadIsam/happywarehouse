using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Application.IServices;
using Application.Dto;
using Domain.Entities;
using Application.Exceptions;
using DataAccess.IUnitOfWorks;
using AutoMapper;

namespace Application.Services;

public class ItemService(IApplicationUnitOfWork unitOfWork, IMapper mapper) : IItemService
{
    public async Task<PaginatedResponse<ItemDto>> GetAll(int warehouseId, int pageNumber, int pageSize)
    {
        pageNumber = pageNumber < 1 ? 1 : pageNumber;
        pageSize = pageSize < 1 ? 10 : pageSize;

        var result = unitOfWork.ItemRepository.GetAllByWarehouseId(warehouseId)
        .Skip((pageNumber - 1) * pageSize)
                            .Take(pageSize).ToList();

        var total = unitOfWork.ItemRepository.GetAllByWarehouseId(warehouseId).Count();
        var items = mapper.Map<IEnumerable<ItemDto>>(result);
        return new PaginatedResponse<ItemDto>
        {
            Data = items,
            PageNumber = pageNumber,
            PageSize = pageSize,
            TotalCount = total,
            TotalPages = (int)Math.Ceiling(total / (double)pageSize)
        };
    }

    public async Task<ItemDto> GetById(int id)
    {
        var result = await unitOfWork.ItemRepository.GetByIdAsync(id);
        return mapper.Map<ItemDto>(result);
    }

    public async Task Create(ItemDto itemDto)
    {
        var item = mapper.Map<Item>(itemDto);
        await unitOfWork.ItemRepository.AddAsync(item);
    }

    public async Task Update(ItemDto itemDto)
    {
        var item = await unitOfWork.ItemRepository.GetByIdAsync(itemDto.Id);
        if (item == null)
        {
            throw new WarehouseException("item-not-found", StatusCodes.Status404NotFound);
        }
        mapper.Map(itemDto, item);
        await unitOfWork.ItemRepository.UpdateAsync(item);
    }

    public async Task Delete(int id)
    {
        var item = await unitOfWork.ItemRepository.GetByIdAsync(id);
        await unitOfWork.ItemRepository.RemoveAsync(item);
    }
}
