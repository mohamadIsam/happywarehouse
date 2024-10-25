using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Entities;
using Domain.Identity;
using Application.Dto;

namespace Application.Mapper;

public class MapperProfile : Profile
{
    public MapperProfile()
    {
        CreateMap<UserDto, ApplicationUser>()
        .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));
        CreateMap<ApplicationUser, UserDto>();

        CreateMap<CountryDto, Country>();
        CreateMap<Country, CountryDto>();

        CreateMap<ItemDto, Item>();
        CreateMap<Item, ItemDto>();

        CreateMap<WarehouseDto, Warehouse>();
        CreateMap<Warehouse, WarehouseDto>();
    }
}
