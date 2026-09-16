import Link from 'next/link';
import { routeConstants } from '#core/constants';

const HouseNotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Casa no encontrada</h2>
      <p>La casa que buscas no existe o ya no está disponible.</p>
      <Link href={routeConstants.houseList}>Volver al listado de casas</Link>
    </div>
  );
};

export default HouseNotFound;
