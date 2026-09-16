import { HouseList, api, mapHouseListFromApiToVm } from '#pods/houseList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alquiler de casas - Listado',
};

// ISR (Incremental Static Regeneration): el catálogo de casas cambia poco y
// no depende de la petición del usuario. Se prerenderiza en build y se
// regenera en segundo plano como máximo una vez por minuto.
export const revalidate = 60;

const HouseListPage = async () => {
  const houseList = await api.getHouseList({ next: { revalidate } });

  return <HouseList houseList={mapHouseListFromApiToVm(houseList)} />;
};

export default HouseListPage;
