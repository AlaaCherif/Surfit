import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../UI/Footer/Footer';
// const left = {
//   initial: { opacity: 0, x: 60 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -60 },
// };
const left = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
// const right = {
//   initial: { opacity: 0, x: -60 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: 60 },
// };
const right = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function AnimatedPage(props) {
  var animation = '';
  if (props.type === 'left') animation = left;
  else animation = right;
  return (
    <motion.div
      variants={animation}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5 }}>
      {props.children}
      <Footer />
    </motion.div>
  );
}
