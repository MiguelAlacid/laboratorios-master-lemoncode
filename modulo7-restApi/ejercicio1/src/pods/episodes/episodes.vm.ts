export interface EpisodeEntity {
  id: number;
  name: string;
  airDate: string;
  code: string;
  charactersCount: number;
}

export interface EpisodesPage {
  episodes: EpisodeEntity[];
  totalPages: number;
}
