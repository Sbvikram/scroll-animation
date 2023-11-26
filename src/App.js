import React from 'react';
import { blogList } from './blog-list';
import { motion } from 'framer-motion';
import './App.css';

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1 },
  },
};

function Card({ image, h2, p, id }) {
  const colClass = 'col-md-6'; 

  return (
    <div className={colClass} style={{display:"flex", justifyContent:"center"}}>
      <motion.div
        className="card"
        id={id}
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.div className="image-container" variants={imageAnimate}>
          {image}
        </motion.div>
        <motion.h2 variants={textAnimate}>{h2}</motion.h2>
        <motion.p variants={textAnimate}>{p}</motion.p>
      </motion.div>
    </div>
  );
}

export default function App() {
  const groupedBlogList = [];

  for (let i = 0; i < blogList.length; i += 2) {
    const pair = blogList.slice(i, i + 2);
    groupedBlogList.push(pair);
  }

  return groupedBlogList.map((pair, index) => (
    <div className="card-wrapper row" key={index}>
      {pair.map((item, itemIndex) => (
        <Card key={itemIndex} image={item.image} h2={item.h2} p={item.p} />
      ))}
    </div>
  ));
}
