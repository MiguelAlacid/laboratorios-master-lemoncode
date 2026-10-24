import React from "react";
import { Locations } from "./locations.component";
import { LocationEntity } from "./locations.vm";
import { getLocations } from "./repository";

export const LocationsContainer: React.FC = () => {
  const [locations, setLocations] = React.useState<LocationEntity[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    getLocations({ page })
      .then((result) => {
        setLocations(result.locations);
        setTotalPages(result.totalPages);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <Locations
      locations={locations}
      loading={loading}
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  );
};
