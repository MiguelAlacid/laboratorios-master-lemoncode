import React from "react";
import { Box, Button, TextField } from "@mui/material";

interface Props {
  value: string;
  saving: boolean;
  onSave: (value: string) => void;
}

export const BestSentence: React.FC<Props> = ({ value, saving, onSave }) => {
  const [text, setText] = React.useState(value);

  React.useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
      <TextField
        label="Best sentence"
        variant="standard"
        multiline
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="outlined"
        disabled={saving || text === value}
        onClick={() => onSave(text)}
      >
        Save
      </Button>
    </Box>
  );
};
