import React from 'react';
import classes from './catalogue.module.css';
import Slides from '../UI/Slides/Slides';
import Button from '../UI/Button/Button';
export default function Catalogue() {
  return (
    <>
      <div className={classes.image}>
        <div className={classes.button}>
          <Button
            text={
              <img
                alt=''
                src='https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-back-arrow-arrows-flatart-icons-outline-flatarticons.png'
              />
            }
            path='/'
            type='secondary'
          />
        </div>
      </div>
      {/* <img src='https://img.icons8.com/ios-glyphs/60/000000/scuba-diving-suit.png' /> */}
      <Slides />
      {/* <img src='https://img.icons8.com/external-glyph-satawat-anukul/50/000000/external-board-beach-glyph-satawat-anukul.png' /> */}
    </>
  );
}
