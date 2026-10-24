import React from "react";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Pager } from "#common/components";
import { EpisodeEntity } from "./episodes.vm";

interface Props {
  episodes: EpisodeEntity[];
  loading: boolean;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Episodes: React.FC<Props> = ({
  episodes,
  loading,
  page,
  totalPages,
  onPageChange,
}) => {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Episode</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Air date</TableCell>
              <TableCell align="right">Characters</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((episode) => (
              <TableRow key={episode.id} hover>
                <TableCell>{episode.code}</TableCell>
                <TableCell>{episode.name}</TableCell>
                <TableCell>{episode.airDate}</TableCell>
                <TableCell align="right">{episode.charactersCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pager page={page} totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
};
