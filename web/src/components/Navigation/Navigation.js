import React, { useEffect, useRef } from 'react'
import "./Navigation.css"
import { SiDiscord } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import {motion, AnimatePresence} from "framer-motion"

export default function Navigation({isOpen, setOpen, x, y, setCursorVariant, setCursorVariant2, activeSound}) {

  const ref = useRef(null)
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


  return (
    <>
      <motion.div    layout animate={!isOpen ? "open" : "closed"}
      variants={variants} transition={{duration: .15 }}  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
      onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
      }} onClick={() => setOpen(!isOpen)} ref={ref} className="nav_container">
         <AnimatePresence>

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
        </AnimatePresence>
      </motion.div>

    </>
  )
}
