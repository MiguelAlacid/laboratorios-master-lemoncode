import { api, HouseList, mapHouseListFromApiToVm } from '#pods/houseList';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/houses/')({
  head: () => ({
    meta: [{ title: 'Alquiler de casas - Listado' }],
  }),
  loader: () => api.getHouseList(),
  component: RouteComponent,
});

function RouteComponent() {
  const houses = Route.useLoaderData();

  return <HouseList houseList={mapHouseListFromApiToVm(houses)} />;
}
