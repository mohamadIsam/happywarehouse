using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dto;

namespace Application.IServices;

public interface IItemService
{
    Task<PaginatedResponse<ItemDto>> GetAll(int pageNumber, int pageSize);
    Task<ItemDto> GetById(int id);
    Task Create(ItemDto item);
    Task Delete(int id);
    Task Update(ItemDto item);
}
