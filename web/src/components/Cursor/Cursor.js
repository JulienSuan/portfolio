import React, { useEffect, useState } from 'react'
import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion';
import "./Cursor.css"

function Cursor({transition, variants, cursorVariant}) {


  return (
    <motion.div variants={variants} animate={cursorVariant} transition={transition} className='cursor'>
        
    </motion.div>
  )
}



export default React.memo(Cursor)