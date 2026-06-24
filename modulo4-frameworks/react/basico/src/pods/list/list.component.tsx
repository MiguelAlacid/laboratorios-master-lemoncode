import React from "react";
import { MemberEntity } from "./list.vm";
import { MemberRow, TableHeader } from "./components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface Props {
  members: MemberEntity[];
  company: string;
  onCompanyChange: (company: string) => void;
  onSearch: () => void;
  onSelect: (login: string) => void;
}

export const List: React.FC<Props> = ({
  members,
  company,
  onCompanyChange,
  onSearch,
  onSelect,
}) => {
  return (
    <>
      <div className="textbox-button-container">
        <TextField
          id="standard-basic"
          label="Compañia"
          variant="standard"
          value={company}
          onChange={(e) => onCompanyChange(e.target.value)}
        />
        <Button onClick={onSearch} sx={{ ml: 2, mt: 1 }} variant="outlined">
          Buscar
        </Button>
      </div>
      <div className="list-user-list-container">
        <TableHeader />

        {members.length > 0 &&
          members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              onSelect={() => onSelect(member.login)}
            />
          ))}
      </div>
    </>
  );
};
