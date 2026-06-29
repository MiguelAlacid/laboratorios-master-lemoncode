import { AppLayout } from "@/layouts";
import { ListContainer } from "@/pods/list";
import React from "react";

export const ListScene: React.FC = () => {
  const [selectedMember, setSelectedMember] = React.useState<string>();

  return (
    <AppLayout TituloComponent={<h2>Lista de miembros</h2>}>
      <ListContainer onSelectMember={setSelectedMember} />
    </AppLayout>
  );
};
