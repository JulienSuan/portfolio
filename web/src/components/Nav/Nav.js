import React, { useEffect, useRef, useState } from 'react'
import "./Nav.css"
import { motion, useTransform, AnimatePresence } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useMotionValueEvent } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';
import sound1 from "../../assets/sfx/GEN_multi1.ogg"
import sound2 from "../../assets/sfx/GEN_multi2.ogg"
import sound3 from "../../assets/sfx/GEN_multi3 2.ogg"


const audio1 = new Audio(sound1)
const audio2 = new Audio(sound2)
const audio3 = new Audio(sound3)

audio1.volume = .05
audio2.volume = .05
audio3.volume = .05

const soundTab = [audio1, audio2, audio3]

export default function Nav({off,offvous,refresh, offcontact, offmoi, setCursorVariant, setCursorVariant2, omorioff, activeSound}) {


    const [pourcExp, setpourcExp] = useState(0);
    const [pourcMoi, setpourcMoi] = useState(0);
    const [pourcProj, setpourcProj] = useState(0);
    const [pourcVous, setpourcVous] = useState(0);
    const [pourcContact, setpourcContact] = useState(0);

    const test = useLenis()


    useEffect(() => {
        if (off && offmoi && omorioff) {
            const max = document.body.clientHeight - window.innerHeight
            console.log(max)
            const pourcentage = ((off + window.innerHeight) / max ) * 100
            const pourcentageproj =  (((omorioff )) / max)  * 100
            const pourcentagemoi = (((offmoi.top )) / max)  * 100
            const pourcentagevous = (((offvous)) / max)  * 100
            const pourcentagecontact = (((offcontact)) / max)  * 100
            setpourcContact(pourcentagecontact.toFixed(2))
            setpourcProj(pourcentageproj.toFixed(2))
            setpourcExp(pourcentage.toFixed(2))
            setpourcMoi(pourcentagemoi.toFixed(2))
            setpourcVous(pourcentagevous.toFixed(2))
            console.log(pourcentage)
            console.log(pourcentageproj)
            console.log(pourcentagemoi)
            console.log(pourcentagemoi)
        }
    }, [off, offmoi, offcontact,refresh]);

    const [isOpen, setisOpen] = useState(true);
    const [isHover, setisHover] = useState(false);

    const {scrollYProgress, scrollY} = useScroll({
        target: window.body,
        offset: ["start start", "end end"]
    })
    
    const [prog, setprog] = useState(Math.round(scrollYProgress.get().toFixed(2) * 100));

    const progress = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(latest)
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < .1) {
            setisOpen(true)
        } else if (!isHover && latest > .1) {
            setisOpen(false)
        }
        console.log("x changed to", latest)
        setprog(Math.round(latest.toFixed(2) * 100))
      })
   
  return (
    <>
        <motion.div whileHover={() => {setisOpen(true); setisHover(true)}} onMouseEnter={() => {setisOpen(true); setisHover(true)}}  onMouseLeave={() =>{ setisOpen(false); setisHover(false)}}  className='naav_container__trigger'>
            <p className='naav_container__trigger_txt'>{prog} %</p>
        </motion.div>
        <motion.div  className={!isOpen ? `naav_container` : `naav_container oopened`} >
            <motion.div className="naav_container_bar">
                <AnimatePresence>
                {isOpen && off && offmoi && <>
                    <motion.p 
                    onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
        setisHover(true)
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        setisHover(false)
      }} onMouseOver={() => setisOpen(true)} whileTap={{scale: .85}}  whileHover={{scale: .95}}initial={{x: "-30%", opacity: .2, y: '-50%'}} exit={{opacity: 0,  y: '-50%', x: "-30%"}} animate={{x: "0%", opacity: 1,  y: '-50%'}} className='naav_container_bar__label'  onClick={() =>{ test &&  test.scrollTo(0);  if (activeSound) {
        const random = Math.floor(Math.random()*3); soundTab[random].play(); soundTab[random].currentTime = 0
      } else return }}  ><span className='pimped'>First Page</span></motion.p>
                    <motion.p onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
        setisHover(true)
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        setisHover(false)
      }} onMouseOver={() => setisOpen(true)} whileTap={{scale: .85}} whileHover={{scale: .95}}initial={{x: "-30%", opacity: .2, y: '-50%'}} exit={{opacity: 0,  y: '-50%', x: "-30%"}} animate={{x: "0%", opacity: 1,  y: '-50%'}} className='naav_container_bar__label' onClick={() => {test &&  test.scrollTo((off + window.innerHeight));   if (activeSound) {
        const random = Math.floor(Math.random()*3); soundTab[random].play(); soundTab[random].currentTime = 0
      } else return }}  style={{top: pourcExp + "%"}}><span className='pimped'>Skills</span></motion.p>
                    <motion.p onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
        setisHover(true)
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        setisHover(false)
      }} onMouseOver={() => setisOpen(true)} whileTap={{scale: .85}} whileHover={{scale: .95}}initial={{x: "-30%", opacity: .2, y: '-50%'}} exit={{opacity: 0,  y: '-50%', x: "-30%"}} animate={{x: "0%", opacity: 1,  y: '-50%'}} className='naav_container_bar__label'  onClick={() => {test && test.scrollTo((offmoi.top));   if (activeSound) {
        const random = Math.floor(Math.random()*3); soundTab[random].play(); soundTab[random].currentTime = 0
      } else return }} style={{top: pourcMoi + "%"}}><span className='pimped'>About me</span></motion.p>
                    <motion.p onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
        setisHover(true)
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        setisHover(false)
      }} onMouseOver={() => setisOpen(true)} whileTap={{scale: .85}} whileHover={{scale: .95}}initial={{x: "-30%", opacity: .2, y: '-50%'}} exit={{opacity: 0,  y: '-50%', x: "-30%"}} animate={{x: "0%", opacity: 1,  y: '-50%'}} className='naav_container_bar__label' onClick={() =>{ test && test.scrollTo(omorioff);   if (activeSound) {
        const random = Math.floor(Math.random()*3); soundTab[random].play(); soundTab[random].currentTime = 0
      } else return }} style={{top: pourcProj + "%"}} ><span className='pimped'>Projects</span></motion.p>
                    <motion.p onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
        setisHover(true)
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        setisHover(false)
      }} onMouseOver={() => setisOpen(true)} whileTap={{scale: .85}} whileHover={{scale: .95}}initial={{x: "-30%", opacity: .2, y: '-50%'}} exit={{opacity: 0,  y: '-50%', x: "-30%"}} animate={{x: "0%", opacity: 1,  y: '-50%'}} className='naav_container_bar__label' onClick={() => {test && test.scrollTo(offvous);   if (activeSound) {
        const random = Math.floor(Math.random()*3); soundTab[random].play(); soundTab[random].currentTime = 0
      } else return }} style={{top: pourcVous + "%"}}><span className='pimped'>About You</span></motion.p>
                    <motion.p onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
        setisHover(true)
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        setisHover(false)
      }} onMouseOver={() => setisOpen(true)} whileTap={{scale: .85}} whileHover={{scale: .95}}initial={{x: "-30%", opacity: .2, y: '-50%'}} exit={{opacity: 0,  y: '-50%', x: "-30%"}} animate={{x: "0%", opacity: 1,  y: '-50%'}} className='naav_container_bar__label' onClick={() => {test && test.scrollTo(offcontact);   if (activeSound) {
        const random = Math.floor(Math.random()*3); soundTab[random].play(); soundTab[random].currentTime = 0
      } else return }} style={{top: pourcContact + "%"}} ><span className='pimped'>Contact</span></motion.p>
                </>}
                </AnimatePresence>
                <motion.div style={{height: progress}} className={"naav_container_bar_progress"}>

                </motion.div>
            </motion.div>
        </motion.div>
    </>
  )
}
