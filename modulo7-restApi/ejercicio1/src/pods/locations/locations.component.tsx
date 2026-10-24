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
import { LocationEntity } from "./locations.vm";

interface Props {
  locations: LocationEntity[];
  loading: boolean;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Locations: React.FC<Props> = ({
  locations,
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
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Dimension</TableCell>
              <TableCell align="right">Residents</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map((location) => (
              <TableRow key={location.id} hover>
                <TableCell>{location.name}</TableCell>
                <TableCell>{location.type}</TableCell>
                <TableCell>{location.dimension}</TableCell>
                <TableCell align="right">{location.residentsCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pager page={page} totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
};
