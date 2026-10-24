import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { switchRoutes } from '#core/router';
import * as classes from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button color="inherit" component={Link} to={switchRoutes.list}>
            Characters
          </Button>
          <Button color="inherit" component={Link} to={switchRoutes.episodes}>
            Episodes
          </Button>
          <Button color="inherit" component={Link} to={switchRoutes.locations}>
            Locations
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
