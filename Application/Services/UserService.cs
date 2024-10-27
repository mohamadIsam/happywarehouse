using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.IServices;
using Application.Dto;
using Application.Exceptions;
using Application.Config;
using Domain.Identity;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Application.Services;

public class UserService : IUserService
{
    private readonly UserManager<ApplicationUser> userManager;
    private readonly RoleManager<ApplicationRole> roleManager;
    private readonly IMapper mapper;
    private readonly PasswordSettings passwordSettings;

    public UserService(UserManager<ApplicationUser> userManager,
    RoleManager<ApplicationRole> roleManager, IMapper mapper, IOptions<PasswordSettings> passwordSettings)
    {
        this.userManager = userManager;
        this.roleManager = roleManager;
        this.mapper = mapper;
        this.passwordSettings = passwordSettings.Value;
    }

    public async Task<PaginatedResponse<UserDto>> GetAll(int pageNumber, int pageSize)
    {
        pageNumber = pageNumber < 1 ? 1 : pageNumber;
        pageSize = pageSize < 1 ? 10 : pageSize;

        var totalUsers = userManager.Users.Count();
        var result = userManager.Users.Skip((pageNumber - 1) * pageSize)
                            .Take(pageSize).ToList();
        var users = mapper.Map<IEnumerable<UserDto>>(result);
        return new PaginatedResponse<UserDto>
        {
            Data = users,
            PageNumber = pageNumber,
            PageSize = pageSize,
            TotalCount = totalUsers,
            TotalPages = (int)Math.Ceiling(totalUsers / (double)pageSize)
        };
    }

    public async Task<UserDto> GetById(int id)
    {
        var user = userManager.Users.Where(c => c.Id == id).FirstOrDefault();
        if (user == null)
            throw new WarehouseException("user-not-found", StatusCodes.Status404NotFound);

        var roleNames = await userManager.GetRolesAsync(user);
        var roleId = roleManager.Roles
            .Where(r => roleNames.Contains(r.Name))
            .Select(r => r.Id)
            .FirstOrDefault();
        var userDto = mapper.Map<UserDto>(user);
        userDto.RoleId = roleId;
        return userDto;
    }

    public async Task CreateUser(UserDto userDto)
    {
        var user = await userManager.FindByIdAsync(userDto.Id.ToString());
        if (user == null)
        {
            user = mapper.Map<ApplicationUser>(userDto);
            var result = await userManager.CreateAsync(user, passwordSettings.Password);
            if (result.Errors.Count() > 0)
                throw new WarehouseException(result.Errors.FirstOrDefault().Description, StatusCodes.Status400BadRequest);

            var role = await roleManager.FindByIdAsync(userDto.RoleId.ToString());
            if (role != null)
                await userManager.AddToRoleAsync(user, role.Name);

        }
    }
    public async Task DeleteUser(int id)
    {
        var user = await userManager.FindByIdAsync(id.ToString());
        var roles = await userManager.GetRolesAsync(user);
        var adminRole = roles.Where(r => r.Contains("Admin")).FirstOrDefault();
        if (adminRole != null)
            throw new WarehouseException("not-allowed", StatusCodes.Status403Forbidden);
        await userManager.DeleteAsync(user);
    }
    public async Task UpdateUser(UserDto userDto)
    {
        var user = await userManager.FindByIdAsync(userDto.Id.ToString());
        if (user == null)
        {
            throw new WarehouseException("user-not-found", StatusCodes.Status404NotFound);
        }

        if (userDto.RoleId > 0)
        {
            // Remove old role before add new role
            var userRoles = await userManager.GetRolesAsync(user);
            var result = await userManager.RemoveFromRolesAsync(user, userRoles);
            var role = await roleManager.FindByIdAsync(userDto.RoleId.ToString());
            if (role != null)
                await userManager.AddToRoleAsync(user, role.Name);
        }
        mapper.Map(userDto, user);
        await userManager.UpdateAsync(user);
    }
}
