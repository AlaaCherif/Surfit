import React from 'react';
import classes from './slide.module.css';

export default function Slide(props) {
  return (
    <div className={classes.container}>
      <div className={classes.bigger}>
        <img className={classes.image} src={props.image} alt='' />
        <h1 className={classes.title}>{props.title}</h1>
      </div>
      <div className={classes.text}>{props.children}</div>
    </div>
  );
}
