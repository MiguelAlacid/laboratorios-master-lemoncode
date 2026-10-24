import { GetEpisodesResponse } from "./api.model";

export interface GetEpisodesParams {
  page?: number;
}

const emptyResponse: GetEpisodesResponse = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

export const getEpisodes = async ({
  page,
}: GetEpisodesParams = {}): Promise<GetEpisodesResponse> => {
  const params = new URLSearchParams();
  if (page) params.set("page", String(page));
  const query = params.toString() ? `?${params.toString()}` : "";

  return fetch(`https://rickandmortyapi.com/api/episode${query}`).then(
    (response) => (response.ok ? response.json() : emptyResponse)
  );
};
