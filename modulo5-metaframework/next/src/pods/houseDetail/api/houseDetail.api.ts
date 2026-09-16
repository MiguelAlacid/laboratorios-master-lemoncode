import { ENV } from '#core/constants';
import { House } from './houseDetail.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouse = async (
  id: string,
  options?: RequestInit
): Promise<House | null> => {
  const response = await fetch(`${url}/${id}`, options);

  if (!response.ok) {
    return null;
  }

  const body = await response.text();
  return body ? (JSON.parse(body) as House) : null;
};
