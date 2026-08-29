import { mapToCollection } from '#common/mappers';
import { ENV } from '#core/constants';
import * as apiModel from './api';
import * as viewModel from './houseList.vm';

export const mapHouseListFromApiToVm = (
  houseList: apiModel.House[]
): viewModel.House[] => mapToCollection(houseList, mapHouseFromApiToVm);

const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House => ({
  id: house.id,
  name: house.name,
  imageUrl: `${ENV.BASE_PICTURES_URL}${house.image}`,
  city: house.city,
  country: house.country,
  price: house.price,
  bedrooms: house.bedrooms,
});
