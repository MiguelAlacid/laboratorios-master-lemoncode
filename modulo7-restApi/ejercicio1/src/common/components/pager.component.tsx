import React from "react";
import { Box, Pagination } from "@mui/material";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pager: React.FC<Props> = ({ page, totalPages, onPageChange }) => (
  <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
    <Pagination
      count={totalPages}
      page={page}
      onChange={(_, value) => onPageChange(value)}
      color="primary"
    />
  </Box>
);
