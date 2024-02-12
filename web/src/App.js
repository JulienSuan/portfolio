import {  useEffect, useRef, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import {motion, LayoutGroup, AnimatePresence } from "framer-motion"
import Noises from './components/Noises/Noises';
import Dispo from './components/Dispo/Dispo';
import Stacks from './components/Stacks/Stacks';
import useMouse from '@react-hook/mouse-position'
import Cursor from './components/Cursor/Cursor';
import Moi from './components/Moi/Moi';
import Formulaire from './components/Formulaire/Formulaire';
import Projets from './components/Projets/Projets';
import Nav from './components/Nav/Nav';
import Test from "./components/Test/Test"
import {useParams} from "react-router-dom"

import sound from "./assets/sfx/GEN_Poke.ogg"
import sound2 from "./assets/sfx/GEN_Poke_reverse.mp3"
import Active from './components/Active/Active';
import Sfx from './components/Sfx/Sfx';
import Contact from './components/Contact/Contact';
import Alert from './components/Alert/Alert';
const sfxOpen = new Audio(sound)
sfxOpen.volume = .1
const sfxClose = new Audio(sound2)
sfxClose.volume = .1



function App() {

  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 550) {
      setIsPhone(true)
    } 
  }, [isPhone, setIsPhone]);


  const {ninja} = useParams()
  console.log(ninja)


  const [count, setcount] = useState(0);
  const [activeSound, setactiveSound] = useState(true);
  const [heChoosed, setheChoosed] = useState(false);
  const [refresh, setrefresh] = useState(0);

  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorVariant2, setCursorVariant2] = useState("default2");
    
  const [mousePos, setmousePos] = useState({x:75, y:75});
  const ref = useRef(null)
  const refou = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 30,
  })

  
  const [timeLui, setTimeLui] = useState(0);
  const [timeland, setTimeland] = useState(0);
  const [timeMoi, setTimeMoi] = useState(0);
  const [openedMe, setopenedMe] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [intervalId2, setIntervalId2] = useState(null);
  const [intervalId3, setIntervalId3] = useState(null);
  const [interact, setinteract] = useState(false);


  const startTimer = (page) => {
    switch (page) {
      case "expert":
        const id = setInterval(() => {
          setTimeLui(prev => prev + 1);
        }, 1000);
        setIntervalId(id);
        break;
      case "landpage":
        const id2 = setInterval(() => {
          setTimeland(prev => prev + 1);
        }, 1000);
        setIntervalId2(id2);

        break;
      case "moi":
        const id3 = setInterval(() => {
          setTimeMoi(prev => prev + 1);
        }, 1000);
        setIntervalId3(id3);

        break;
          

      default:
        break;
    }
  };

  const closeTimer = (page) => {
    switch (page) {
      case "expert":
        clearInterval(intervalId);
        break;
      case "landpage":
        clearInterval(intervalId2);
        break;
      case "moi":
        clearInterval(intervalId3);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup interval when component unmounts
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const [points, setPoints] = useState(0);
  
  let mouseXPosition = mousePos.x;
  let mouseYPosition = mousePos.y;
  

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28
  };
  const variants = {
    default: {
      opacity: 1,
      PointerEvent:"none",
      height: 100,
      width: 100,
      border: "1px #a78bfa1f solid",
      x: mouseXPosition -50,
      y: mouseYPosition -50,
      transition: {
        type: "spring",
        mass: 0.3,
        stiffness: 100
      }
    },
    default2: {
      opacity: 1,
      PointerEvent:"none",
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#a78bfa",
      color: "#000",
      height: 10,
      width: 10,
      fontSize: "18px",
      x: mouseXPosition - 5,
      y: mouseYPosition - 5
    },
    hover: {
      opacity: 1,
      PointerEvent:"none",
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#a78bfaa0",
      color: "#000",
      height: 25,
      width: 25,
      fontSize: "18px",
      x: mouseXPosition - 12.5,
      y: mouseYPosition - 12.5
    },
    tap: {
      opacity: 1,
      PointerEvent:"none",
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#a78bfaa0",
      color: "#000",
      height: 10,
      width: 10,
      fontSize: "18px",
      x: mouseXPosition - 5,
      y: mouseYPosition - 5
    }
  };
  const [isOpen, setOpen] = useState(true)

  useEffect(() => {
    if (activeSound) {
      if (!isOpen) {
        sfxOpen.play()
        setopenedMe(true)
        setinteract(true)
      }
      else if (interact) {
        sfxClose.play()
      }
    }
  }, [isOpen]);



  const [off, setOff] = useState(0);
  const [offmoi, setOffmoi] = useState(0);
  const [omorioff, setomorioff] = useState(0);
  const [offvous, setoffvous] = useState(0);
  const [offcontact, setoffcontact] = useState(0);

  const [overoui, setoveroui] = useState(false);
  const [overnon, setovernon] = useState(false);








  return (
    <div ref={ref} onMouseLeave={(e) => {
      setmousePos({x: e.clientX, y: e.clientY})
    }}>
      <Sfx setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2} overoui={overoui} overnon={overnon} heChoosed={heChoosed} setactiveSound={setactiveSound} activeSound={activeSound}></Sfx>
      <Nav refresh={refresh} activeSound={activeSound} offcontact={offcontact} offvous={offvous} omorioff={omorioff}  setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2} off={off} offmoi={offmoi}></Nav>
      <AnimatePresence>
        
          {!heChoosed && <motion.div  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}> <Active activeSound={activeSound} setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2} setoveroui={setoveroui} setovernon={setovernon} setactiveSound={setactiveSound}  setheChoosed={setheChoosed}></Active>
            <motion.div onMouseOver={() => setactiveSound(true)} onClick={() => {setheChoosed(true); setactiveSound(true)}}   className="jecachetout"></motion.div>
        </motion.div>
          }

      </AnimatePresence>
      <AnimatePresence>
        {!isOpen ?  <motion.div  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} onClick={() => {!isOpen && setOpen(!isOpen)}} className="jecachetout"></motion.div> : null}
      </AnimatePresence>
      <Navigation activeSound={activeSound} x={mouseXPosition} y={mouseYPosition} isOpen={isOpen} setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2} setOpen={setOpen}></Navigation>
    {/* <LayoutGroup> */}
      {!isPhone &&<>
      <Cursor variants={variants} cursorVariant={cursorVariant} transition={spring} ></Cursor>
      <Cursor variants={variants} cursorVariant={cursorVariant2} transition={spring} ></Cursor>
      </> }
      <motion.div ref={refou} className="App">
        <motion.div  className="landpage"  onViewportEnter={() => startTimer("landpage")} onViewportLeave={() => closeTimer("landpage")} >
          <Dispo></Dispo>
            <h1 className='landpage_title' >Julien Bigot</h1>
            <h2 className='landpage_subtitle'>Dévellopeur Web Créatif et Soucieux des détails</h2>
            <h3 className='landpage_subtitle_2' >Je conçois des sites sur mesure pour répondre à tous vos besoins.</h3>
          {!isPhone && <Noises x={mouseXPosition} y={mouseYPosition}></Noises>}
        </motion.div>
      <Stacks activeSound={activeSound} setOff={setOff} off={off} ref={refou} startTimer={startTimer} closeTimer={closeTimer} setPoints={setPoints} points={points} x={mouseXPosition} y={mouseYPosition}></Stacks>

    <Moi activeSound={activeSound} setOffmoi={setOffmoi} startTimer={startTimer} closeTimer={closeTimer} x={mouseXPosition} y={mouseYPosition} setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2}></Moi>
    <Projets isPhone={isPhone} setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2} setomorioff={setomorioff}  counti={count}  setcount={setcount}></Projets>
    <Formulaire offcontact={offcontact} setrefresh={setrefresh}  activeSound={activeSound} setoffvous={setoffvous} counti={count} setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2} isOpen={isOpen}  setOpen={setOpen} openedMe={openedMe} timeMoi={timeMoi} startTimer={startTimer} closeTimer={closeTimer} timeLui={timeLui} timeland={timeland} points={points}></Formulaire>
    
    <Contact setCursorVariant={setCursorVariant} setCursorVariant2={setCursorVariant2} activeSound={activeSound} refresh={refresh} setoffcontact={setoffcontact}></Contact>
      </motion.div>
    {/* </LayoutGroup> */}
    <Test></Test>
    <p className="GoodForHealthBadForImagination">
     Portfolio fait avec 💜 par moi même
    </p>
    </div>
  );
}

export default App;
