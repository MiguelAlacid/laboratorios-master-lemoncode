import * as api from "./api/api";
import * as mappers from "./detail.mappers";

export const getCharacter = async (id: string) =>
  api.getCharacter(id).then(mappers.mapCharacterEntityToVM);

export const saveBestSentence = async (id: string, bestSentence: string) =>
  api.saveBestSentence(id, bestSentence);
