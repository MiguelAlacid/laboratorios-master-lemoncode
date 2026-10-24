import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
  episodes: string;
  locations: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  list: '/list',
  detail: '/detail/:id',
  episodes: '/episodes',
  locations: '/locations',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'detail'> {
  detail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  detail: (id) => generatePath(switchRoutes.detail, { id }),
};
