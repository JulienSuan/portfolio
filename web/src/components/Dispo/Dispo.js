import React, { useRef, useState } from 'react'
import "./Dispo.css"
import {useScroll,useMotionValueEvent, useAnimation, motion } from "framer-motion"

function Dispo() {
    
    const Dispo = useRef(null)
    const animationControls = useAnimation();
    const [isAnimated, setisAnimated] = useState(false);

    const { scrollY  } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (isAnimated) {
            if (latest < 200) {
                setisAnimated(false)
            }
            return
        }
        if (latest > 200) {
            setisAnimated(true)
            animationControls.start({ opacity: 0, scale: 0 });
        } else {
            setisAnimated(false)
            animationControls.start({ opacity: 1,scale: 1 });
        }
    });

  return (
    <motion.div animate={animationControls} className='dispo_container'>
        <div className="dispo_container_circle">
            
        </div>
        <p>Disponible</p>
    </motion.div>
  )
}


export default React.memo(Dispo)
