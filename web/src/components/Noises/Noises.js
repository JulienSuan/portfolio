import React from 'react'
import { motion } from 'framer-motion';

function Noises({x, y}) {

  return (
    <motion.div  className="noises">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
    </motion.div>
  )
}

export default React.memo(Noises)