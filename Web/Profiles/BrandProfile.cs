using AutoMapper;
using Entities;
using Web.Models;

namespace Web.Profiles
{
    public class BrandProfile : Profile
    {
        public BrandProfile()
        {
            CreateMap<Brand, BrandDto>();
        }
    }
}