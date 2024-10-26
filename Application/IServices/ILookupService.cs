using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dto;

namespace Application.IServices;

public interface ILookupService
{
    Task<ICollection<CountryDto>> GetCountries();
    ICollection<RoleDto> GetRoles();
}
