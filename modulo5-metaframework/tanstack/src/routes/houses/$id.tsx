import { api, House, mapHouseFromApiToVm } from '#pods/houseDetail';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/houses/$id')({
  loader: ({ params }) => api.getHouse({ data: { id: params.id } }),
  head: ({ loaderData }) => ({
    meta: [{ title: `Alquiler de casas - ${loaderData?.name}` }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const house = Route.useLoaderData();
  return <House house={mapHouseFromApiToVm(house)} />;
}
