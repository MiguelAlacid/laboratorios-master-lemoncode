import React from "react";
import { MemberEntity } from "./list.vm";
import { MemberRow, TableHeader } from "./components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Props {
  members: MemberEntity[];
  company: string;
  loading: boolean;
  onCompanyChange: (company: string) => void;
  onSearch: () => void;
  onSelect: (login: string) => void;
}

export const List: React.FC<Props> = ({
  members,
  company,
  loading,
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
        <Paper sx={{ height: 400, width: '100%', gridColumn: '1 / -1' }}>
          <DataGrid
              rows={members.map((member) => ({
              id: member.id,
              avatarUrl: member.avatarUrl,
              login: member.login,
            }))}
            columns={[
              {
                field: 'avatarUrl',
                headerName: 'Avatar',
                width: 70,
                sortable: false,
                renderCell: (params) => <img src={params.value} alt="" width={32} height={32} />,
              },
              { field: 'id', headerName: 'Id', width: 130 },
              { 
                field: 'details', 
                headerName: 'Details', 
                width: 130,  
                renderCell: (params) => (
                  <Button onClick={() => onSelect(params.row.login)}>
                    {params.row.login}
                  </Button>
                ),
              },
            ]}
            loading={loading}
            initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
          />
        </Paper>

        {/* {members.length > 0 &&
          members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              onSelect={() => onSelect(member.login)}
            />
          ))} */}
      </div>
    </>
  );
};
