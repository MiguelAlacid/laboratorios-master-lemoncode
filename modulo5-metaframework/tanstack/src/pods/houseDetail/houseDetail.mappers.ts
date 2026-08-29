import { ENV } from '#core/constants';
import * as apiModel from './api';
import * as viewModel from './houseDetail.vm';

export const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House =>
  Boolean(house)
    ? {
        id: house.id,
        name: house.name,
        description: house.description,
        address: house.address,
        city: house.city,
        country: house.country,
        bedrooms: house.bedrooms,
        beds: house.beds,
        bathrooms: house.bathrooms,
        price: house.price,
        imageUrl: `${ENV.BASE_PICTURES_URL}${house.image}`,
        amenities: house.amenities,
        reviews: house.reviews,
      }
    : viewModel.createEmptyHouse();
