import { ENV } from '#core/constants';
import { createServerFn } from '@tanstack/react-start';
import { House } from './houseList.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouseList = createServerFn().handler(
  async (): Promise<House[]> =>
    await fetch(url).then((response) => response.json())
);
