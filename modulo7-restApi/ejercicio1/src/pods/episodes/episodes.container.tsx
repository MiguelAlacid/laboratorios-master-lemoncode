import React from "react";
import { Episodes } from "./episodes.component";
import { EpisodeEntity } from "./episodes.vm";
import { getEpisodes } from "./repository";

export const EpisodesContainer: React.FC = () => {
  const [episodes, setEpisodes] = React.useState<EpisodeEntity[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    setLoading(true);
    getEpisodes({ page })
      .then((result) => {
        setEpisodes(result.episodes);
        setTotalPages(result.totalPages);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <Episodes
      episodes={episodes}
      loading={loading}
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  );
};
