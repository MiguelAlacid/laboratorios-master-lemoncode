import { CharacterEntity, Info } from "./api.model";

export interface GetCharactersResponse {
  info: Info;
  results: CharacterEntity[];
}

export interface GetCharactersParams {
  name?: string;
}

const emptyResponse: GetCharactersResponse = {
  info: { count: 0 },
  results: [],
};

export const getCharacters = async ({
  name,
}: GetCharactersParams = {}): Promise<GetCharactersResponse> => {
  const params = new URLSearchParams();
  if (name) params.set("name", name);
  const query = params.toString() ? `?${params.toString()}` : "";

  return fetch(`/api/character${query}`)
    .then((response) => (response.ok ? response.json() : emptyResponse))
    .then((data: GetCharactersResponse) => data);
};