import React from 'react';
import classes from './image.module.css';

export default function Image() {
  return (
    <>
      <div className={classes['wave-container']}>
        <h1 className={classes.title}>Surfit!</h1>
        <p className={classes.text}>ONE PLACE FOR ALL YOUR GEAR</p>
        <svg
          className={classes['open-animation']}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'>
          <path
            fill='#EEE'
            fillOpacity='1'
            d='M0,32L48,48C96,64,192,96,288,133.3C384,171,480,213,576,234.7C672,256,768,256,864,240C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
        </svg>
      </div>
      <div className={classes.scroll}>Scroll to discover our online catalogue</div>
    </>
  );
}
