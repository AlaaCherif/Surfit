import React, { useRef } from 'react';
import Scroll from '../UI/Scroll/Scroll';
import Image from '../Wave/Image';
import Card from '../Card/Card';

export default function Home() {
  const myRef = useRef(null);
  const handleClick = () => {
    window.scrollTo(0, myRef.current.offsetTop);
  };
  return (
    <>
      <div style={{ height: '100vh' }}>
        <Image />
        <Scroll handleClick={handleClick} />
      </div>
      <div ref={myRef}>
        <Card />
      </div>
    </>
  );
}
