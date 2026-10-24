import * as am from "./api/api.model";
import { GetCharactersResponse } from "./api/api";
import * as vm from "../list.vm";

export const mapCharacterEntityToVM = (
  character: am.CharacterEntity,
): vm.CharacterEntity => ({
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status,
});

export const mapCharactersEntityToVM = (
  characters: am.CharacterEntity[] ,
): vm.CharacterEntity[] => characters.length !== 0 ? characters.map(mapCharacterEntityToVM): [];

export const mapCharactersResponseToVM = (
  response: GetCharactersResponse,
): vm.CharacterEntity[] => mapCharactersEntityToVM(response.results);
