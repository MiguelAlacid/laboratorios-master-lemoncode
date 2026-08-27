import * as api from "./api/api";
import * as mappers from "./rickMortyDetail.mappers";

export const getCharacter = async (id: string) =>
  api.getCharacter(id).then(mappers.mapCharacterEntityToVM);
