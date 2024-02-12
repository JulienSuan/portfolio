import React, { useEffect, useRef, useState } from 'react'
import "./Navigation.css"
import { SiDiscord } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import {motion, AnimatePresence, useMotionValueEvent, useScroll} from "framer-motion"

export default function Navigation({isOpen, setOpen, x, y, setCursorVariant, setCursorVariant2, activeSound}) {

  const ref = useRef(null)
  const [isHere, setisHere] = useState(true);
  const variants = {
    open: { width: 500, height: 260, borderRadius: ".5em"},
    closed: { width: 80,  height: 80, borderRadius: "5em"},
  }
  useEffect(() => {
    if (isOpen) {
      setCursorVariant("default")
      setCursorVariant2("default2")
    }
   
  }, [isOpen]);

  
  const {scrollYProgress, scrollY} = useScroll({
    target: window.body,
    offset: ["start start", "end end"]
})


useMotionValueEvent(scrollYProgress, "change", (latest) => {
   if (latest > .97) {
    setisHere(false)
   } else {
    setisHere(true)

   }
  })


  return (
    <AnimatePresence>
    {isHere && 
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }} exit={{opacity: 0}} >
      <motion.div    layout animate={!isOpen ? "open" : "closed"}
      variants={variants} transition={{duration: .15 }}  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
      onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
      }} onClick={() => setOpen(!isOpen)} ref={ref} className="nav_container">

        {!isOpen && 
          <motion.div   initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
           transition={{delay: .2}} className="contantmee">
            <p className='contantmee_1'>Julien Bigot</p>
            <p className='contantmee_2'>06 44 37 56 54</p>
            <p className='contantmee_3'>jbigot.dev@gmail.com</p>
            <div className="contantmee_child">
            </div>
          </motion.div>
        }
      </motion.div>

    </motion.div>}
        </AnimatePresence>
  )
}
