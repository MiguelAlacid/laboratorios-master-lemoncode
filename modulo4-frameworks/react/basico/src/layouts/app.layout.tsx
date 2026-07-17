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
      <div className="layout-app-header">
        <a href="#"  className="links">Miembros GitHub</a>
        <a href="/rickMorty" className="links">Rick & Morty API</a>
      </div>
      <main>{children}</main>
    </div>
  );
};
