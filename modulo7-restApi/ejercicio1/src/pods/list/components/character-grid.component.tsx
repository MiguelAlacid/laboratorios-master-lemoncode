import React from "react";
import { Box } from "@mui/material";
import { CharacterEntity } from "../list.vm";
import { CharacterCard } from "./character-card.component";

interface Props {
  characters: CharacterEntity[];
  onCharacterClick: (id: number) => void;
}

export const CharacterGrid: React.FC<Props> = ({ characters, onCharacterClick }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 2,
      padding: 2,
    }}
  >
    {characters.map((character) => (
      <CharacterCard key={character.id} character={character} onClick={onCharacterClick} />
    ))}
  </Box>
);
