import React, { useEffect, useRef, useState } from 'react'
import image from "../../assets/Statue-Aesthetic-Theme-PNG-Isolated-Pic.png"
import "./Moi.css"
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';
import Alert from '../Alert/Alert';
import sound from "../../assets/sfx/SE_lightbulb.ogg"
import { useParams } from 'react-router-dom';


function Moi({x, y,setOffmoi,activeSound, setCursorVariant, setCursorVariant2, startTimer, closeTimer}) {

  const {ninja} = useParams()

  const soundi = new Audio(sound)
  soundi.volume = .1

    const moving = {
        x: (x/40) -50,
        y: (y/40) +30,
        rotateX:  10 + (-y/70),
        rotateY: (x/70),
    }

    const ref = useRef(null)

    useEffect(() => {
      console.dir(refa)
      setOffmoi({top: refa.current.offsetTop, margin: window.getComputedStyle(refa.current).marginTop})
    }, []);
    
    const refa = useRef(null)
    
    const { scrollYProgress } = useScroll({
      target: refa,
      offset: ["start end", "end start"],
    })

    

    const [alrt, setalrt] = useState(false);
    
    const activeAlert = () => {
      navigator.clipboard.writeText("jbigot.dev@gmail.com")
      if (!alrt && activeSound) {
        soundi.play()
      }
      setalrt(true)
      const time = setTimeout(() => {
        setalrt(false)
      }, 3000);
      if (alrt) {
        clearTimeout(time)
      }
    }
    


    const translate = useTransform(scrollYProgress, [0, .5,1], [-250, 0, 200])



  return (
    <>
    {alrt &&  <Alert message={"Le mail a été copié dans votre presse-papiers"}></Alert>}
     
    <motion.div  ref={refa} onViewportEnter={() => startTimer("moi")} onViewportLeave={() => closeTimer("moi")} className='moi_container'>
        <h2 className='stacks__container_big_title' style={{position: "absolute", top: 0}}>A propos de moi</h2>
        <motion.img ref={ref} animate={moving}  className='moi_image' src={image} alt="" srcset="" />
        {!ninja ?  <motion.p style={{y: translate}}  className='moi_para'>3 années que je développe avec beaucoup de plaisir, autant sur des projets personnels que pour des particuliers. <br></br><br></br>
        Je suis en mesure de m'adapter à tous les types d'environnements de travail avec beaucoup de facilité. Étant toujours curieux dans mon domaine, j'ai pour habitudes de m'intéresser aux différentes branches du métier. <br></br><br></br> 
        Que vous soyez une entreprise, une startup, un auto-entrepreneurs ou bien particuliers, je disponible pour échanger avec vous à l'adresse mail suivante <span onMouseEnter={() => {
          setCursorVariant("hover")
          setCursorVariant2("hover")
        }} onMouseLeave={() => {
          setCursorVariant("default")
          setCursorVariant2("default2")
        }}  style={{letterSpacing: 1.5}}  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
        onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onClick={() => activeAlert()} className='pimped uuunder'>jbigot.dev@gmail.com</span>.
        </motion.p> : 
         <motion.p style={{y: translate}}  className='moi_para'>

        Bonjour tout le monde (TLM) Ninja ! Oui, ce portfolio est pour vous 💜. Normalement, c'est la partie où je me présente sérieusement pour les "autres". Mais vous ! Vous êtes si différent, si unique, que vous méritez une page dédiée dans toute votre splendeur ✨<br /><br />
        Oui, je suis tombé amoureux de votre agence... Tout me correspond de A à Z 😢 S'il vous plaît, faites de moi votre Genin ! Je suis un petit Breton qui a toujours rêvé d'habiter dans un pays froid... Le Canada est une destination rêvée pour mon futur ! <br /><br />
        En plus de cela, La Rochelle !! Avant de plonger dans le froid, je peux aussi me permettre d'habiter à La Rochelle ?! Mais vous savez le rêve que c'est ?? La Rochelle ! On ne parle pas de Paris ni de Marseille, mais de l'une des villes les plus belles de France à mon goût ! 😭<br /><br />
        Je pourrais écrire des heures sur les qualités de votre agence, mais ça ferait beaucoup. Alors, je continue ma parlotte avec vous plus bas 😊 ( je me suis même pas présenté ...) <br />

          <span onMouseEnter={() => {
           setCursorVariant("hover")
           setCursorVariant2("hover")
         }} onMouseLeave={() => {
           setCursorVariant("default")
           setCursorVariant2("default2")
         }}  style={{letterSpacing: 1.5}}  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
         onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onClick={() => activeAlert()} className='pimped uuunder'>jbigot.dev@gmail.com</span>.
         </motion.p>}
       
    </motion.div>
        </>
  )
}


export default React.memo(Moi)
