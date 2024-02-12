import React, { useState } from 'react';
import "./CardPoints.css";
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';
import sound1 from "../../assets/sfx/GEN_multi1.ogg"


function CardPoints({stats, setCursorVariant, activeSound, setCursorVariant2, children, offcontact }) {
  const test = useLenis()
  const audio1 = new Audio(sound1)
  audio1.volume = .05
  
    const [chooseMessage, setChooseMessage] = useState(0);

    const handleScore = () => {
       if (stats >= 500) {
        return "SS"
       } else if (stats >= 450) {
        return "S+"
       } else if (stats >= 400) {
        return "S"
       } else if (stats >= 350) {
        return "S-"
       }
       else if (stats >= 300) {
        return "A"
       }
       if (stats >= 200) {
        return "B"
       }
       if (stats >= 100) {
        return "C"
       }
       if (stats >= 40) {
        return "C-"
       }
       if (stats >= 0) {
        return "Z-"
       }   
    }

    const handleText = () => {
      if (stats >= 500) {
        return (
          <p>Alors là... Je suis sans voix... N'aurais-tu pas triché pour en arriver là ? 🙄 Quoi qu'il en soit, mes félicitations !!! Avec un score pareil, tu ne peux plus faire marche arrière ! Allez, contacte-moi maintenant. Tu n'as plus trop le choix, tu as au moins perdu 5 minutes de ton temps sur mon portfolio. Alors vas-y, il y a le petit bouton qui t'amène directement au formulaire champion 😊</p>
        )
      }
      if (stats >= 450) {
        return (
          
  <p>Au-dessus de 450 points ?! Je suis vraiment impressionné. Si tu avais fait plus, je t'aurais soupçonné de triche, mais tu as l'air plutôt d'être très curieux 😊 Avec un score pareil, je suis certain que nous pouvons très bien nous entendre. Alors viens me contacter au plus vite maintenant ! 😁</p>
        )
      }
      if (stats >= 400) {
        return (
          
          <p>Au-dessus de 400 points ?! Hé, pas mal du tout ! Tu n'as pas triché hein ? 😄 Sérieusement, ton score me plaît beaucoup ! Avec un intérêt aussi grand pour mon portfolio on devrait échanger ensemble. Alors ne sois pas timide, contacte-moi dès maintenant ! 🚀</p>
        )
      }
      if (stats >= 300) {
        return (
          
          <p>Au-dessus de 300 points ?! Pas mal du tout ! Ton intérêt est évident, et ça me fais chaud au cœur. On peut certainement trouver des choses à faire ensemble. Alors, envoie-moi un message quand tu seras prêt à échanger tes idées ! 😁</p>
        )
      }
      if (stats >= 200) {
        return (
          <p>Au-dessus de 200 points ?! C'est un bon score ! Tu as pris le temps de naviguer dans mon portfolio, et ça compte beaucoup. Au moins, tu es proche de la moyenne ! 🤭 L'inverse m'aurait blessé 😐 En tout cas, cela démontre que tu as un peu d'intérêt pour moi. Alors, viens tout de suite me contacter maintenant que tu es là !</p>
        )
      }
      if (stats >= 100) {
        return (
          <p>Mmmmmh ... Au-dessus de 100 points seulement 😐. Serais-tu quelqu'un de pressé dans la vie ? Ou bien ne trouves-tu pas mon portfolio si intéressant ? 😥 J'aurais vraiment aimé pouvoir piquer davantage ta curiosité, mais je suis certain que nous pouvons encore rattraper ça ensemble autour d'un verre. Alors, n'hésite quand même pas à venir me contacter !</p>
        )
      }
      if (stats >= 0) {
        return (     
          <p>Je n'ose même pas citer ton score... Alors comme ça, mon portfolio ne t'attire pas l'œil ? 😯 Me voilà maintenant déboussolé, je pensais bien faire avec ce magnifique portfolio et voilà qu'on y passe à peine 30 secondes 😓 Malgré cela, je suis certain de ta bonne foi, alors n'hésite pas à me contacter, c'était peut-être une erreur 😶</p>
        )
      }
    }

  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ y: 100, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='CardPoints_container'>
        <div className="CardPoints_container_header">
          <p className='CardPoints_container_header_note'>{handleScore()}</p>
          <p className='CardPoints_container_header_score'>{stats}/500</p>
        </div>
        <div className='CardPoints_container_para'>
          {handleText()}
        </div>
        <motion.p
          style={{ cursor: "pointer" }}
          onMouseDown={() => { setCursorVariant("tap"); setCursorVariant2("tap"); }}
          onMouseUp={() => { setCursorVariant("hover"); setCursorVariant2("hover"); }}
          onMouseEnter={() => {
            setCursorVariant("hover");
            setCursorVariant2("hover");
          }}
          onMouseLeave={() => {
            setCursorVariant("default");
            setCursorVariant2("default2");
          }}
          className="calculez_points calculez_points22"
        >
          <motion.div>
            <motion.p onClick={() => {test.scrollTo(offcontact); activeSound && audio1.play()}} className='pimped'>Contactez-moi</motion.p>
          </motion.div>
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}


export default React.memo(CardPoints)