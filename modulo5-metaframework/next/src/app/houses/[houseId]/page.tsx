import { House, api, mapHouseFromApiToVm } from '#pods/houseDetail';
import { api as houseListApi } from '#pods/houseList';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ houseId: string }>;
}

// SSG + generateStaticParams: cada ficha se conoce en build, su contenido
// (fotos, descripción, servicios, reseñas) cambia poco y es igual para todos
// los usuarios -> se prerenderiza una página estática por casa.
export const generateStaticParams = async () => {
  const houseList = await houseListApi.getHouseList({ cache: 'force-cache' });
  return houseList.map((house) => ({ houseId: house.id }));
};

// ISR: si una casa se actualiza en la API, su HTML se regenera pasado 1 minuto.
export const revalidate = 60;

// Si se solicita una casa nueva que no existía en build, se genera bajo
// demanda (SSR en la primera visita) y se cachea a partir de entonces.
export const dynamicParams = true;

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { houseId } = await props.params;
  const house = await api.getHouse(houseId, { next: { revalidate } });
  return {
    title: house
      ? `Alquiler de casas - ${house.name}`
      : 'Alquiler de casas - Casa no encontrada',
  };
};

const HousePage = async (props: Props) => {
  const { houseId } = await props.params;
  const house = await api.getHouse(houseId, { next: { revalidate } });

  if (!house) {
    notFound();
  }

  return <House house={mapHouseFromApiToVm(house)} />;
};

export default HousePage;
