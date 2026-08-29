import { Link } from '@tanstack/react-router';
import React from 'react';
import { House } from '../houseList.vm';
import classes from './houseItem.module.css';

interface Props {
  house: House;
}

export const HouseItem: React.FC<Props> = (props) => {
  const { house } = props;

  return (
    <Link to="/houses/$id" params={{ id: house.id }} className={classes.root}>
      <img className={classes.image} src={house.imageUrl} alt={house.name} />
      <h2 className={classes.title}>{house.name}</h2>
      <p className={classes.location}>
        {house.city}, {house.country}
      </p>
      <div className={classes.footer}>
        <span>{house.bedrooms} habitaciones</span>
        <span className={classes.price}>{house.price} €/noche</span>
      </div>
    </Link>
  );
};
