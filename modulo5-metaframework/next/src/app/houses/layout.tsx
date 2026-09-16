import { Nav } from '#common/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { routeConstants } from '#core/constants';
import classes from './layout.module.css';

interface Props {
  children: React.ReactNode;
}

const HousesLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Nav className={classes.nav}>
        <Link href={routeConstants.root} className={classes.link}>
          <Image src="/casa.png" alt="logo" width="32" height="23" />
        </Link>
        <h1 className={classes.title}>Alquiler de casas</h1>
      </Nav>
      <div className={classes.content}>{children}</div>
    </>
  );
};

export default HousesLayout;
