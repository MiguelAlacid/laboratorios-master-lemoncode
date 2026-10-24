import React from "react";
import { CharacterEntity } from "./detail.vm";
import { Box, Button, Card, CardContent, CardMedia, Chip, CircularProgress, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { switchRoutes } from "#core/router";
import { BestSentence } from "./components";

interface Props {
  character?: CharacterEntity;
  loading: boolean;
  saving: boolean;
  onSaveBestSentence: (value: string) => void;
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

export const Detail: React.FC<Props> = ({ character, loading, saving, onSaveBestSentence }) => {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!character) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
      <Card sx={{ maxWidth: 360, width: "100%" }}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{ aspectRatio: "1 / 1", objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {character.name}
          </Typography>
          <Chip
            label={character.status}
            color={statusColor(character.status)}
            size="small"
            sx={{ marginBottom: 2 }}
          />
          <Stack spacing={1}>
            <Typography variant="body2"><strong>Species:</strong> {character.species}</Typography>
            <Typography variant="body2"><strong>Gender:</strong> {character.gender}</Typography>
            <Typography variant="body2"><strong>Origin:</strong> {character.origin}</Typography>
            <Typography variant="body2"><strong>Location:</strong> {character.location}</Typography>
          </Stack>
          <BestSentence
            value={character.bestSentence}
            saving={saving}
            onSave={onSaveBestSentence}
          />
          <Button sx={{ display: "flex", mt: 2, textAlign: "center", justifyContent: "center" }} variant="contained" component={Link} to={switchRoutes.list}>
            back to list page
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
