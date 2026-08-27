import React from "react";
import { Detail } from "./rickMortyDetail.component";
import { CharacterEntity } from "./rickMortyDetail.vm";
import { getCharacter } from "./repository";

interface Props {
  id: string;
}

export const RickMortyDetailContainer: React.FC<Props> = ({ id }) => {
  const [character, setCharacter] = React.useState<CharacterEntity>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  return <Detail character={character} loading={loading} />;
};
