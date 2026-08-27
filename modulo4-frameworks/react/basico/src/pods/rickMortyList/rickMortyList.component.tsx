import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterEntity } from "./rickMortyList.vm";
import { Box, Card, CardContent, CardMedia, Chip, CircularProgress, Pagination, TextField, Typography } from "@mui/material";
import { routes } from "@/router";

interface Props {
  characters: CharacterEntity[];
  loading: boolean;
  personaje: string;
  onPersonajeChange: (value: string) => void;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
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

export const List: React.FC<Props> = ({
  characters,
  loading,
  personaje,
  onPersonajeChange,
  page,
  totalPages,
  onPageChange,
}) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <div className="textbox-button-container">
        <TextField
          id="standard-basic"
          label="personaje"
          variant="standard"
          value={personaje}
          onChange={(e) => onPersonajeChange(e.target.value)}
        />
      </div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 2,
          padding: 2,
        }}
      >
        {characters.map((character) => (
          <Card
            key={character.id}
            onClick={() => navigate(routes.rickMortyDetail(String(character.id)))}
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
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => onPageChange(value)}
          color="primary"
        />
      </Box>
    </>
  );
};
