export interface LocationEntity {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface GetLocationsResponse {
  info: Info;
  results: LocationEntity[];
}
