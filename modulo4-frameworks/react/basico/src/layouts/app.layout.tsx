import Button from "@mui/material/Button";
import React, { PropsWithChildren } from "react";

interface Props {
  TituloComponent: React.ReactNode;
}

export const AppLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  TituloComponent,
}) => {
  return (
    <div className="layout-app-container">
      <div className="layout-app-header">{TituloComponent}</div>

      <main>{children}</main>
    </div>
  );
};
