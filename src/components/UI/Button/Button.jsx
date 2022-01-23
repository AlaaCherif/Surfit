import React from 'react';
import classes from './button.module.css';
import { Link } from 'react-router-dom';

export default function Button(props) {
  var styling = '';
  if (props.type === 'secondary') styling = classes.button2;
  else if (props.type === 'wave') styling = classes.button3;
  else styling = classes.button;

  return (
    <Link to={props.path} className={styling}>
      {props.text}
    </Link>
  );
}
