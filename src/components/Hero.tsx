import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import HeroSVG from './svg/HeroSVG';

const Hero = () => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 6], [0, -1], {
    clamp: false,
  });

  useEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, []);

  return (
    <main ref={ref} className="relative " style={{ height: '80vh' }}>
      <HeroSVG />
      <Navbar />
      <motion.div style={{ y }} className="mt-10 text-center text-white">
        <h1
          style={{
            textShadow: '1px 4px 7px rgba(0,0,0,0.2)',
          }}
          className="text-5xl mb-2 font-bold md:text-7xl lg:text-8xl md:mt-40 macbook:mt-10"
        >
          Kul med Djur
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          style={{ textShadow: '1px 4px 7px rgba(0,0,0,0.2)' }}
          className="text-xl md:text-3xl"
        >
          Delsjön runt
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Hero;
