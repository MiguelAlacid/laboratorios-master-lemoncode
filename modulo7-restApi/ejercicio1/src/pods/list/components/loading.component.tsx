import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const Loading: React.FC = () => (
  <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
    <CircularProgress />
  </Box>
);
