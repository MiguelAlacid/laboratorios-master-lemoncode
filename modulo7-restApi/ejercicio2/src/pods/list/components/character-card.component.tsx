import React from "react";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { CharacterEntity } from "../list.vm";

interface Props {
  character: CharacterEntity;
  onClick: (id: number) => void;
}

const statusColor = (status: string): "success" | "error" | "default" => {
  switch (status.toLowerCase()) {
    case "alive":
      return "success";
    case "dead":
      return "error";
    default:
      return "default";
  }
};

export const CharacterCard: React.FC<Props> = ({ character, onClick }) => (
  <Card
    onClick={() => onClick(character.id)}
    sx={{
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      "&:hover": { transform: "scale(1.05)", boxShadow: 6, cursor: "pointer" },
    }}
  >
    <CardMedia
      component="img"
      image={character.image}
      alt={character.name}
      sx={{ aspectRatio: "1 / 1", objectFit: "cover" }}
    />
    <CardContent>
      <Typography variant="h6" component="div" noWrap>
        {character.name}
      </Typography>
      <Chip
        label={character.status}
        color={statusColor(character.status)}
        size="small"
        sx={{ marginTop: 1 }}
      />
    </CardContent>
  </Card>
);
