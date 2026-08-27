import * as api from "./api/api";
import * as mappers from "./rickMortyList.mappers";

export const getCharacters = async (params?: api.GetCharactersParams) =>
  api.getCharacters(params).then(mappers.mapCharactersResponseToVM);
