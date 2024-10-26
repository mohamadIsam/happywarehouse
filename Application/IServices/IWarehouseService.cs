using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dto;

namespace Application.IServices;

public interface IWarehouseService
{
    Task<PaginatedResponse<WarehouseDto>> GetAll(int pageNumber, int pageSize);
    Task<WarehouseDto> GetById(int id);
    Task Create(WarehouseDto warehouse);
    Task Update(WarehouseDto warehouse);
    Task Delete(int id);
}
