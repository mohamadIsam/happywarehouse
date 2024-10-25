using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dto;
using Domain.Identity;

namespace Application.IServices;

public interface IUserService
{
    Task CreateUser(UserDto user);
    Task DeleteUser(int id);
    Task UpdateUser(UserDto user);
    Task<PaginatedResponse<UserDto>> GetAll(int pageNumber, int pageSize);
}
