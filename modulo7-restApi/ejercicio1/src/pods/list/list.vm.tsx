export interface CharacterEntity {
  id: number;
  name: string;
  image: string;
  status: string;
}

export interface CharactersPage {
  characters: CharacterEntity[];
  totalPages: number;
}
