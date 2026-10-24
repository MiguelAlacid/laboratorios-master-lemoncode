export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  image: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
