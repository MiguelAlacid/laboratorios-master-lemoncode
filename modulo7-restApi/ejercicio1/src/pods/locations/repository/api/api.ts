import { GetLocationsResponse } from "./api.model";

export interface GetLocationsParams {
  page?: number;
}

const emptyResponse: GetLocationsResponse = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

export const getLocations = async ({
  page,
}: GetLocationsParams = {}): Promise<GetLocationsResponse> => {
  const params = new URLSearchParams();
  if (page) params.set("page", String(page));
  const query = params.toString() ? `?${params.toString()}` : "";

  return fetch(`https://rickandmortyapi.com/api/location${query}`).then(
    (response) => (response.ok ? response.json() : emptyResponse)
  );
};
