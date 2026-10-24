import * as am from "./api/api.model";
import * as vm from "../locations.vm";

export const mapLocationEntityToVM = (location: am.LocationEntity): vm.LocationEntity => ({
  id: location.id,
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residentsCount: location.residents.length,
});

export const mapLocationsResponseToVM = (
  response: am.GetLocationsResponse
): vm.LocationsPage => ({
  locations: response.results.map(mapLocationEntityToVM),
  totalPages: response.info.pages,
});
