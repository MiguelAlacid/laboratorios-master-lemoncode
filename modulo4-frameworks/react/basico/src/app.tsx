import React from "react";
import { AppRouter } from "./router/app.router";
import { CompanyProvider } from "./core/providers/company.context";

export const App = () => {
  return (
    <CompanyProvider>
      <AppRouter />
    </CompanyProvider>
  );
};
