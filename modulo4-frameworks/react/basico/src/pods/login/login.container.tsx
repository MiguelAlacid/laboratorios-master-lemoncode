import React from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./login.component";
import { routes } from "@/router";

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();

  const onLogin = (username: string, password: string) => {
    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return <Login onLogin={onLogin} />;
};
