import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Alert.css"

const Alert = ({message}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWidth(prevWidth => Math.min(prevWidth + 1, 100));
    }, 30); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence>
      <motion.div layout initial={{ y: -100, x: "-50%" }} animate={{ y: 0, x: "-50%" }} exit={{ y: -100, x: "-50%" }} className='alert_container'>
        <p className='pimped'>{message}</p>
        <motion.div style={{ width: `${width}%` }} className="underlined"></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default React.memo(Alert)
