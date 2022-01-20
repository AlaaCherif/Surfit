import React from 'react';
import classes from './slides.module.css';
import Slide from '../Slide/Slide';
import surf from '../../../assets/surfboard.png';
import clothing from '../../../assets/diving2.png';
import leash from '../../../assets/leash.png';

export default function Slides() {
  return (
    <div className={classes.slides}>
      <Slide image={surf} title='Surfboards'>
        <p>Check out our wide selection of surfboards.</p>
        <br />
        <p>Suitable for all levels from rookie to professional ,you are guarenteed to get the best materials on the market.</p>
      </Slide>
      <Slide image={clothing} title='Wetsuits' />
      <Slide image={leash} title='Accessories' />
    </div>
  );
}
