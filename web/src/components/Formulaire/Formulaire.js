import React, { useState, useEffect, useRef } from 'react';
import './Formulaire.css';
import { motion, animate , useMotionValue, useTransform, AnimatePresence} from 'framer-motion';
import sound from "../../assets/sfx/se_plop copy.ogg"
import calc from "../../assets/sfx/GEN_item_get.ogg"
import CardPoints from '../CardPoints/CardPoints';

  const active = new Audio(sound)
  active.volume = .1
  const calcu = new Audio(calc)
  calcu.volume = .1

  
  
  const Formulaire = React.memo(({setoffvous,offcontact, setrefresh,activeSound, counti, setCursorVariant, setCursorVariant2, points, openedMe, timeMoi,startTimer, closeTimer, timeLui, timeland, isOpen, setOpen }) => {
    
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);
  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);
  const count4 = useMotionValue(0);
  const rounded4 = useTransform(count4, Math.round);
  const [isHere, setIsHere] = useState(false);
  const ehouioui = useRef(null)


  const [isload, setisload] = useState(false);
  const [cardloaded, setCardloaded] = useState(false);
  const [message, setmessage] = useState("Calculez vos points");
  const [stats, setstats] = useState(0);

  const heClicked = () => {
    
    let sommePoints = 0;
    console.log(counti)

    console.log(points);
    
    if (points > 200) {
      sommePoints += 83.4;
    } else if (points > 100) {
      sommePoints += 60;
    } else if (points > 50) {
      sommePoints += 40;
    } else if (points > 20) {
      sommePoints += 20;
    }
    if (timeMoi >= 10) {
      sommePoints += 83.4;
    } else if (timeMoi >= 5) {
      sommePoints += 60;
    } else if (timeMoi >= 2) {
      sommePoints += 40;
    } else if (timeMoi >= 1) {
      sommePoints += 20;
    }
    if (timeland >= 5) {
      sommePoints += 83.4;
    } else if (timeland >= 3) {
      sommePoints += 60;
    } else if (timeland >= 2) {
      sommePoints += 40;
    } else if (timeland >= 1) {
      sommePoints += 20;
    }
    if (timeLui > 10) {
      sommePoints += 83.4;
    } else if (timeLui > 5) {
      sommePoints += 60;
    } else if (timeLui > 2) {
      sommePoints += 40;
    } else if (timeLui > 1) {
      sommePoints += 20;
    }
    if (counti == 3 ) {
      sommePoints += 83.4;
    } else if (counti == 2) {
      sommePoints += (27.7*2);
    } else if (counti == 1) {
      sommePoints += 27.7;
    } else if (counti == 0) {
      sommePoints += 0;
    }
    if (openedMe) {
      sommePoints += 83.4;
    } else {
      sommePoints += 0;
    }
    
    setstats(Math.floor(sommePoints))
    
    

    setrefresh(prev => prev +1)
    setCardloaded(false)

    setmessage("Chargement...")
    setisload(true)
    setTimeout(() => {
      calcu.play()
      setmessage("Calculez vos points")
      setisload(false)
      setCardloaded(true)
      setrefresh(prev => prev +1)
      






    }, 2000);
    if (activeSound) {
      active.play()
      active.currentTime = 0
    }
  }


  useEffect(() => {
    setoffvous(ehouioui.current.offsetTop)
  }, [ehouioui]);

  useEffect(() => {
    if (isHere) {
      const animation = animate(count, points, { duration: 3, ease: "easeOut", stiffness: 200 });
      const animation2 = animate(count2, timeMoi, { duration: 3, ease: "easeOut", stiffness: 200 });
      const animation3 = animate(count3, timeLui, { duration: 3, ease: "easeOut", stiffness: 200 });
      const animation4 = animate(count4, timeland, { duration: 3, ease: "easeOut", stiffness: 200 });
      return (
        animation.stop,
        animation2.stop,
        animation3.stop,
        animation4.stop
        )
    }
  }, [points, isHere]);




  const generateHtml = (message) => {
    
    switch (message) {
      case 1:
        return (
          <p>qsdqsd</p>
        )
        case 2:
          return (
            <p>qsdqsd</p>
          )
      
      default:
        break;
    }
  }






  return (
    <motion.div ref={ehouioui} whileInView={() => setIsHere(true)} onViewportEnter={() => startTimer("lui")} onViewportLeave={() => {closeTimer("lui"); setIsHere(false)}} className='form_container'>
      {isHere && <>
      <motion.h2 className='stacks__container_big_title'>A propos de vous</motion.h2>
      <div className="cont_vous">
        <motion.h2>Vous avez joué <motion.span className='pimped'>{rounded}</motion.span> fois avec mon effet</motion.h2>
        <motion.h2>Vous êtes restés <motion.span className='pimped'>{rounded4}</motion.span> {rounded4.get() > 1 ? "secondes": "seconde"} à contempler mon magnifique prénom</motion.h2>
        <motion.h2>Vous vous êtes endormi <motion.span className='pimped'>{rounded3}</motion.span> {rounded3.get()  > 1 ? "secondes": "seconde"} sur mes expertises</motion.h2>
        <motion.h2>Vous avez visité avec curiosité <span className='pimped'>{counti}</span> projets sur <motion.span className='pimped'>3</motion.span></motion.h2>
        <motion.h2>Vous avez soigneusement lu ma rédaction pendant <motion.span className='pimped'>{rounded2}</motion.span> {rounded2.get()  > 1 ? "secondes": "seconde"}</motion.h2>
        {!openedMe ? <h2>Vous <span className='pimped'>n'avez pas encore </span>déroulé ma merveilleuse petite <span onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
        onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}}  onMouseEnter={() => {
          setCursorVariant("hover")
          setCursorVariant2("hover")
        }} onMouseLeave={() => {
          setCursorVariant("default")
          setCursorVariant2("default2")
        }}  onClick={() => {isOpen && setOpen(!isOpen)}} style={{cursor: "pointer"}} className='pimped uuunder'>carte</span></h2> : <h2>Vous <span className='pimped'>avez gracieusement </span>déroulé ma <span  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
        onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}}  onMouseEnter={() => {
          setCursorVariant("hover")
          setCursorVariant2("hover")
        }} onMouseLeave={() => {
          setCursorVariant("default")
          setCursorVariant2("default2")
        }} onClick={() => {isOpen && setOpen(!isOpen)}}style={{cursor: "pointer"}} className='pimped uuunder'>carte</span></h2>}
      </div>
      </>}
      <motion.p style={{cursor: "pointer"}}  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
      }} whileTap={{scale: .85}} onClick={() => heClicked()}  whileHover={{scale: .95}}  className="calculez_points">
            <motion.div >
              <motion.p  className='pimped' >{ message}</motion.p>
              </motion.div>
      </motion.p>
      <AnimatePresence>
        {isload && <motion.span layout initial={{ scale: 0}} animate={{ scale: 1 }} exit={{ scale: 0, opacity: 0 }} class="loader"></motion.span>}
      {cardloaded && 
       <CardPoints offcontact={offcontact} stats={stats} setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2}>
        {generateHtml(1)}
       </CardPoints>
      }
      </AnimatePresence>
    </motion.div>
  );
});

export default React.memo(Formulaire)


