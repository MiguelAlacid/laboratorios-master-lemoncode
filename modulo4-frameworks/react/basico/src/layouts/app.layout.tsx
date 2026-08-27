import Button from "@mui/material/Button";
import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
  TituloComponent: React.ReactNode;
}

export const AppLayout: React.FC<PropsWithChildren<Props>> = ({
  children
}) => {
  return (
    <div className="layout-app-container">
      <div className="layout-app-header">
        <Link to={routes.list} className="links">Miembros GitHub</Link>
        <Link to={routes.rickMorty} className="links">Rick & Morty API</Link>
      </div>
      <main>{children}</main>
    </div>
  );
};
