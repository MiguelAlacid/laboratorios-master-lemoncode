import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { ListScene, DetailScene, EpisodesScene, LocationsScene } from '#scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
        <Route path={switchRoutes.episodes} element={<EpisodesScene />} />
        <Route path={switchRoutes.locations} element={<LocationsScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.list} />}
        />
      </Routes>
    </HashRouter>
  );
};
