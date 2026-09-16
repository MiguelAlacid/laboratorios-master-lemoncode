import React from 'react';
import classes from './houseDetail.module.css';
import * as viewModel from './houseDetail.vm';

interface Props {
  house: viewModel.House;
}

export const House: React.FC<Props> = (props) => {
  const { house } = props;

  return (
    <div className={classes.root}>
      <h2 className={classes.name}>{house.name}</h2>
      <img className={classes.image} alt={house.name} src={house.imageUrl} />
      <div className={classes.info}>
        <p className={classes.location}>
          {house.address}, {house.city}, {house.country}
        </p>
        <p>{house.description}</p>
        <p className={classes.price}>{house.price} € por noche</p>
        <ul className={classes.details}>
          <li>{house.bedrooms} habitaciones</li>
          <li>{house.beds} camas</li>
          <li>{house.bathrooms} baños</li>
        </ul>
      </div>
      <ul className={classes.reviews}>
        {house.reviews.map((review) => (
          <li key={review.id} className={classes.review}>
            <div className={classes.reviewHeader}>
              <span>
                {review.author} - {review.rating} estrellas
              </span>
              <span className={classes.reviewDate}>{review.date}</span>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
