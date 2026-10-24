import * as am from "./api/api.model";
import * as vm from "../episodes.vm";

export const mapEpisodeEntityToVM = (episode: am.EpisodeEntity): vm.EpisodeEntity => ({
  id: episode.id,
  name: episode.name,
  airDate: episode.air_date,
  code: episode.episode,
  charactersCount: episode.characters.length,
});

export const mapEpisodesResponseToVM = (
  response: am.GetEpisodesResponse
): vm.EpisodesPage => ({
  episodes: response.results.map(mapEpisodeEntityToVM),
  totalPages: response.info.pages,
});
