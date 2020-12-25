using AutoMapper;
using Entities;
using Web.ViewModels.Item;

namespace Web.Profiles
{
    public class ItemProfile : Profile
    {
        public ItemProfile()
        {
            CreateMap<AddItemViewModel, Item>();
        }
    }
}