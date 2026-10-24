export interface LocationEntity {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residentsCount: number;
}

export interface LocationsPage {
  locations: LocationEntity[];
  totalPages: number;
}
