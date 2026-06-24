import { LoginScene, ListScene, DetailScene } from "@/scenes";
import React from "react";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScene />} />
        <Route path="/list" element={<ListScene />} />
        <Route path="/detail/:id" element={<DetailScene />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
