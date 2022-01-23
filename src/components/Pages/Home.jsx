import React, { useRef } from 'react';
import Scroll from '../UI/Scroll/Scroll';
import Image from '../Wave/Image';
import Card from '../Card/Card';

export default function Home() {
  const down = useRef(null);
  const up = useRef(null);
  const scrollDown = () => {
    window.scrollTo(0, down.current.offsetTop);
  };
  const scrollUp = () => {
    window.scrollTo(0, up.current.offsetTop);
  };
  return (
    <>
      <div ref={up} style={{ height: '100vh' }}>
        <Image />
        <Scroll handleClick={scrollDown} />
      </div>
      <div ref={down}>
        <Card handleClick={scrollUp} />
      </div>
    </>
  );
}
