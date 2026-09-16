import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { routeConstants } from '#core/constants';
import classes from './page.module.css';

export const metadata: Metadata = {
  title: 'Alquiler de casas - Inicio',
};

// SSG: página sin datos ni APIs dinámicas -> Next la prerenderiza en build
// y la sirve como HTML estático desde el CDN.
const RootPage = () => {
  return (
    <div className={classes.root}>
      <Image
        className={classes.logo}
        src="/casa.png"
        alt="logo"
        width={80}
        height={57}
      />
      <h1 className={classes.title}>Alquiler de casas</h1>
      <p className={classes.subtitle}>
        Encuentra la casa perfecta para tu próxima escapada. Explora nuestro
        catálogo de alojamientos y reserva en pocos clics.
      </p>
      <Link href={routeConstants.houseList} className={classes.cta}>
        Entrar al portal
        <span className={`material-icon ${classes.ctaIcon}`}>
          arrow_forward
        </span>
      </Link>
    </div>
  );
};

export default RootPage;
