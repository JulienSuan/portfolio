import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Projets.css'
import { motion, AnimatePresence, useTransform, useMotionValueEvent } from 'framer-motion';
import brad from "../../assets/projets/brad.png"
import allforone from "../../assets/projets/allforone.png"
import moon from "../../assets/projets/moonLighter.png"
import { useScroll } from 'framer-motion';
import sound from "../../assets/sfx/GEN_Poke_reverse.mp3"
import { Link } from 'react-router-dom';

const sfxOpen = new Audio(sound)
sfxOpen.volume = .1
function Projets({setcount,isPhone , counti, setomorioff, setCursorVariant, setCursorVariant2}) {


       
        const refomori = useRef(null)

        useEffect(() => {
                setomorioff(refomori.current.offsetTop)
        }, [refomori]);

    const [isHere, setisHere] = useState(false);
    const [isHere2, setisHere2] = useState(false);
    const [isHere3, setisHere3] = useState(false);

    const [isvisited, setisvisited] = useState(false);
    const [isvisited2, setisvisited2] = useState(false);
    const [isvisited3, setisvisited3] = useState(false);

    const refa = useRef(null)
    const refa2 = useRef(null)
    const refa3 = useRef(null)

    useEffect(() => {
        if (isvisited) {
                setcount(counti + 1)   
        } 
          if (isvisited2) {
                  setcount(counti + 1)   
                } 
          if (isvisited3) {
                  setcount(counti + 1)   
                }
    }, [isvisited, isvisited2, isvisited3]);


//     useEffect(() => {
//         if (isHere) {
//                 sfxOpen.play()   
//         }
//         if (isHere2) {
//                 sfxOpen.play()   
//         }
//         if (isHere3) {
//                 sfxOpen.play()   
//         }
       
//     }, [isHere, isHere2, isHere3]);

    
    const scroll1 = useScroll({
      target: refa,
      offset: ["start end", "end start"],
    })

    const translate = useTransform(scroll1.scrollYProgress, [.20, .45], [-100, 0])
    
    const translate2 = useTransform(scroll1.scrollYProgress, [0,1], [-100, 200])
    
    const scroll2 = useScroll({
            target: refa2,
            offset: ["start end", "end start"],
        })
        const translate3 = useTransform(scroll2.scrollYProgress, [0,1], [-50, 150])
  
    const scroll3 = useScroll({
            target: refa3,
            offset: ["start end", "end start"],
        })
        const translate4 = useTransform(scroll3.scrollYProgress, [0,1], [-120, 120])
        const translate5 = useTransform(scroll3.scrollYProgress, [.20,.45], [100, 0])
        const translate6 = useTransform(scroll3.scrollYProgress, [.20,.45], [0, 100])
  
        useMotionValueEvent(translate, "change", (latest) => {
                if (latest > -50) {
                        setisHere(true)  
                } else {
                        setisHere(false) 
                }
              })
  
        useMotionValueEvent(translate2, "change", (latest) => {
                if (latest >= 170) {
                        setisHere2(true)  
                } else {
                        setisHere2(false) 
                }
              })
  
        useMotionValueEvent(translate4, "change", (latest) => {
                if (latest > 0) {
                        setisHere3(true)  
                } else {
                        setisHere3(false) 
                }
              })

  return (
    <div ref={refomori} className='projets_container'>

         <motion.div  layout ref={refa3} className="projet_cont">
        <motion.h2  layout className='stacks__container_big_title' style={{position: "relative", top: 0}}>Mes Projets</motion.h2>
                <motion.div onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
       
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        
      }}   style={!isPhone  && {y: translate4}} onClick={() => setisvisited(true)}   layout className="projet_cont_image_container">
       <Link to={"https://juliensuan.github.io/Moonlighter/"} target='blank'>
                        <motion.div initial={{ backgroundSize: "105%"}} transition={{duration:.25, ease: "backOut"}} whileHover={{scale: .95, backgroundSize: "115%"}} whileTap={{scale: 0.92}}style={{backgroundImage: `url(${moon})`}} className="projet_cont_image">
                        </motion.div>
       </Link>
                        <motion.p style={!isPhone  && {y: translate5}} className='ILoveOmori'>Là où tout à commencé</motion.p>
                        <motion.p style={!isPhone  && {y: translate5}} className='ILoveOmori'>2021</motion.p>
                </motion.div>
        <AnimatePresence>
                {isHere3 &&  <motion.p  style={!isPhone  && {y: translate6}} key="modal3" layout transition={{duration: .5}} initial={{opacity: 0, y: 0}} animate={{opacity: .75, y: 0}} exit={{opacity: 0}} className='projet_cont_para moi_para'>
Ceci est mon tout premier site, oui<br /><br />Qu'il ne soit pas terminé, pas très beau, que la vidéo en arrière-plan se lance une fois sur dix <br /><br />Il reste tout de même mon tout premier-né, alors malgré tous ses défauts visibles et son apparence un peu funky, il me rappelle d'où je viens<br /><br /></motion.p>}
        </AnimatePresence>
            </motion.div>
            <motion.div  ref={refa} className="projet_cont">
                <motion.div onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
       
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        
      }}  style={!isPhone  && {y: translate2}} onClick={() => setisvisited2(true)}  layout className="projet_cont_image_container">
       <Link to={"https://www.playallforone.com/"} target='blank'>

                        <motion.div  initial={{ backgroundSize: "105%"}} transition={{duration:.25, ease: "backOut"}} whileHover={{scale: .95, backgroundSize: "115%"}} whileTap={{scale: 0.92}} style={{backgroundImage: `url(${allforone})`}} className="projet_cont_image">
                        </motion.div>

       </Link>

                        <motion.p style={!isPhone  && {x: translate}} className='ILoveOmori'>Overwatch All For One</motion.p>
                        <motion.p style={!isPhone  && {x: translate}} className='ILoveOmori'>2022</motion.p>

                </motion.div>
        <AnimatePresence>
                {isHere &&  <motion.p  key="modal" layout transition={{duration: .5}} initial={{opacity: 0, y: 100}} animate={{opacity: .75, y: 0}} exit={{opacity: 0}} className='projet_cont_para moi_para'>
À ne pas confondre avec l'antagoniste d'une certaine série <br /><br /> Ce site a pour but de réunir des joueurs et à organiser des tournois Overwatch en récompensant les gagnants avec des cash-prize <br /><br />J'ai réalisé mon tout premier stage parmi eux, en créant certains composants côté front-end</motion.p>}
        </AnimatePresence>
            </motion.div>
            <motion.div ref={refa2}  className="projet_cont">
                <motion.div onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
       
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        
      }} style={!isPhone  && {y: translate3}} onClick={() => setisvisited3(true)}  layout  className="projet_cont_image_container">
          <Link target='blank' to={"https://le-domaine.com/?gad_source=1&gclid=CjwKCAiA_aGuBhACEiwAly57MUkL2UzZdunkT1_kWSpsasmN9_ncd5ifMa9Z8yABvskoQ1nSFYXxHhoC9CkQAvD_BwE"}>
                        <motion.div initial={{ backgroundSize: "105%"}} transition={{duration:.25, ease: "backOut"}} whileHover={{scale: .95, backgroundSize: "115%"}} whileTap={{scale: 0.92}} style={{backgroundImage: `url(${brad})`}}  className="projet_cont_image">
                        </motion.div>
         </Link>
                        <p className='ILoveOmori'>Le Domaine Skincare</p>
                        <p className='ILoveOmori'>2023</p>
                </motion.div>
        <AnimatePresence>
                {isHere2 &&  <motion.p  key="modal2" layout transition={{duration: .5}} initial={{opacity: 0, y: 100}} animate={{opacity: .75, y: 0}} exit={{opacity: 0}} className='projet_cont_para moi_para'>
Le domaine du skincare est, comme son nom l'indique, un site de produits de beauté co-développé par Brad Pitt<br /><br />
J'ai eu la chance de développer certains composants côté front-end durant une alternance
                
                </motion.p>}
        </AnimatePresence>
            </motion.div>
           
    </div>
  )
}


export default React.memo(Projets)
