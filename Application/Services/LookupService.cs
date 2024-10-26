using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Application.IServices;
using Application.Dto;
using Domain.Identity;
using AutoMapper;
using DataAccess.IUnitOfWorks;

namespace Application.Services;

public class LookupService(IApplicationUnitOfWork unitOfWork, IMapper mapper, RoleManager<ApplicationRole> roleManager) : ILookupService
{
    public async Task<ICollection<CountryDto>> GetCountries()
    {
        var result = await unitOfWork.CountryRepository.GetAllAsync();
        return mapper.Map<ICollection<CountryDto>>(result);
    }

    public ICollection<RoleDto> GetRoles()
    {
        var roles = roleManager.Roles.ToList();
        return mapper.Map<ICollection<RoleDto>>(roles);
    }
}
