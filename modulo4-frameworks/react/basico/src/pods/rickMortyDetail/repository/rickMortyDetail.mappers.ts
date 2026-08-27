import * as am from "./api/api.model";
import * as vm from "../rickMortyDetail.vm";

export const mapCharacterEntityToVM = (
  character: am.CharacterEntity,
): vm.CharacterEntity => ({
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status,
  species: character.species,
  gender: character.gender,
  origin: character.origin.name,
  location: character.location.name,
});
