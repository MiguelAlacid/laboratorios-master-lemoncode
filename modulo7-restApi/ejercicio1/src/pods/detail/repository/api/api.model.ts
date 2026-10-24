export interface CharacterLocationEntity {
  name: string;
  url: string;
}

export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocationEntity;
  location: CharacterLocationEntity;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
