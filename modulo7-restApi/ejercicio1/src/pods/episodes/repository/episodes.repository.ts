import * as api from "./api/api";
import * as mappers from "./episodes.mappers";

export const getEpisodes = async (params?: api.GetEpisodesParams) =>
  api.getEpisodes(params).then(mappers.mapEpisodesResponseToVM);
