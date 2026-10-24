import * as api from "./api/api";
import * as mappers from "./locations.mappers";

export const getLocations = async (params?: api.GetLocationsParams) =>
  api.getLocations(params).then(mappers.mapLocationsResponseToVM);
