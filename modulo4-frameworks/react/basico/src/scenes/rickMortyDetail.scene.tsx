import { UserName } from "@/common";
import { AppLayout } from "@/layouts";
import { RickMortyDetailContainer } from "@/pods/rickMortyDetail";

import React from "react";
import { useParams } from "react-router-dom";

export const RickMortyDetailScene: React.FC = () => {
  const { id } = useParams();

  return (
    <AppLayout TituloComponent={<UserName name="Rick & Morty Detail" />}>
      <RickMortyDetailContainer id={id ?? ""} />
    </AppLayout>
  );
};
