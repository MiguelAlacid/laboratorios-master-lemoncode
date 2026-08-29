import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import classes from './route.module.css';

export const Route = createFileRoute('/houses')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <nav className={classes.nav}>
        <Link className={classes.link} to="/">
          <img src="/images/casa.png" alt="logo" width={32} height={23} />
        </Link>
        <h1 className={classes.title}>Alquiler de casas</h1>
      </nav>
      <div className={classes.content}>
        <Outlet />
      </div>
    </>
  );
}
