import React from 'react';
import classes from './slides.module.css';
import Slide from '../Slide/Slide';
import surf from '../../../assets/surfboard.png';
import clothing from '../../../assets/diving2.png';
import leash from '../../../assets/leash.png';

export default function Slides() {
  return (
    <div className={classes.slides}>
      <Slide path='/surfboards' image={surf} title='Surfboards'>
        <p>Check out our wide selection of surfboards.</p>
        <br />
        <p>
          Suitable for all levels from rookie to professional ,you are
          guarenteed to get the best materials on the market.
        </p>
      </Slide>
      <Slide path='/wetsuits' image={clothing} title='Wetsuits'>
        <p>
          Look your best when you're having the time of your life on the shore.
        </p>
        <br />
        <p>
          All fits are available, so everyone can enjoy the protection our
          products offer from the sun as well as the violent waves you might
          burst through.
        </p>
      </Slide>
      <Slide path='/others' image={leash} title='Accessories'>
        <p>From leashes to hooks.</p>
        <br />
        <p>
          Everything you might need to make your journey as seemless as it could
          get.
        </p>
      </Slide>
    </div>
  );
}
