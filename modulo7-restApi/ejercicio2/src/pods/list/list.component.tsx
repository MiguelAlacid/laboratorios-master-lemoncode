import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterEntity } from "./list.vm";
import { linkRoutes } from "#core/router";
import { CharacterGrid, Loading, Search } from "./components";

interface Props {
  characters: CharacterEntity[];
  loading: boolean;
  personaje: string;
  onPersonajeChange: (value: string) => void;
}

export const List: React.FC<Props> = ({
  characters,
  loading,
  personaje,
  onPersonajeChange,
}) => {
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Search value={personaje} onChange={onPersonajeChange} />
      <CharacterGrid
        characters={characters}
        onCharacterClick={(id) => navigate(linkRoutes.detail(String(id)))}
      />
    </>
  );
};
