import { UserName } from "@/common";
import { AppLayout } from "@/layouts";
import { DetailContainer } from "@/pods/detail/detail.container";

import React from "react";
import { useParams } from "react-router-dom";

export const DetailScene: React.FC = () => {
  const { id } = useParams();

  return (
    <AppLayout TituloComponent={<UserName name="Lemoncode" />}>
      <DetailContainer login={id ?? ""} />
    </AppLayout>
  );
};
