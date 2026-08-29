import { ENV } from '#core/constants';
import { createServerFn } from '@tanstack/react-start';
import { House } from './houseDetail.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouse = createServerFn()
  .validator((data: { id: string }) => data)
  .handler(
    async ({ data }): Promise<House> =>
      await fetch(`${url}/${data.id}`).then((response) => response.json())
  );
