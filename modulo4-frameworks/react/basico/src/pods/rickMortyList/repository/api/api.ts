import { CharacterEntity, Info } from "./api.model";

export interface GetCharactersResponse {
  info: Info;
  results: CharacterEntity[];
}

export interface GetCharactersParams {
  name?: string;
  page?: number;
}

const emptyResponse: GetCharactersResponse = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

export const getCharacters = async ({
  name,
  page,
}: GetCharactersParams = {}): Promise<GetCharactersResponse> => {
  const params = new URLSearchParams();
  if (name) params.set("name", name);
  if (page) params.set("page", String(page));
  const query = params.toString() ? `?${params.toString()}` : "";

  return fetch(`https://rickandmortyapi.com/api/character${query}`)
    .then((response) => (response.ok ? response.json() : emptyResponse))
    .then((data: GetCharactersResponse) => data);
};