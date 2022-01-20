import React from 'react';
import classes from './scroll.module.css';

export default function Scroll(props) {
  return <div onClick={props.handleClick} className={classes.section}></div>;
}
