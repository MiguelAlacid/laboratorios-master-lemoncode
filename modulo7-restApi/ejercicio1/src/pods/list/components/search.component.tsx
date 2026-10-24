import React from "react";
import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Search: React.FC<Props> = ({ value, onChange }) => (
  <div className="textbox-button-container">
    <TextField
      id="standard-basic"
      label="personaje"
      variant="standard"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
