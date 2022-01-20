import React from 'react';
import classes from './card.module.css';
import Button from '../UI/Button/Button';

export default function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <h1>Catch the best offers in the market </h1>
      </div>
      <div className={classes.text}></div>
      <Button text='View Catalogue' path='/catalogue' />
    </div>
  );
}
