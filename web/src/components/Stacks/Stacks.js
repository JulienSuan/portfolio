import React, { useEffect, useRef, useState, forwardRef  } from 'react'
import "./Stacks.css"
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiReactrouter, SiAxios,SiFramer, SiExpress, SiMongodb, SiMongoose, SiNodedotjs, SiGithub, SiGit, SiFigma, SiAdobe  } from "react-icons/si";
import { motion, AnimatePresence, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';
import sound from "../../assets/sfx/BA_download_attack.ogg"
const sfxOpen = new Audio(sound)
sfxOpen.volume = .05

export default forwardRef(function Stacks({x,y,activeSound, setOff, setPoints, startTimer, closeTimer,points}, ref) {


  // const [ishere, setishere] = useState(false);

  const [isphone, setisPhone] = useState(false);
  const doc = useRef(null)

  const stack = useRef(null)

  
  
  const refa = useRef(null)

  useEffect(() => {
    
    setOff(stack.current.offsetTop)
  }, []);
  
  useEffect(() => {
    const elements = document.querySelectorAll(".stacks__container_grid_stack");

    const sound = () => {
      sfxOpen.play();
      sfxOpen.currentTime = 0;
    };

    const addEventListeners = () => {
      elements.forEach((element) => {
        element.addEventListener("mouseenter", sound);
      });
    };

    const removeEventListeners = () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", sound);
      });
    };

    if (activeSound) {
      console.log("active");
      addEventListeners();
    } else {
      console.log("removed");
      removeEventListeners();
    }

    return () => {
      removeEventListeners();
    }
  }, [activeSound]);
    
  const { scrollYProgress } = useScroll({
    target: doc,
    offset: ["start end", "end start"],
  })

  const translate = useTransform(scrollYProgress, [0, 1], [-150, 250])
  const translate2 = useTransform(scrollYProgress, [0, 1], [100, -100])


  useEffect(() => {
    if (window.innerWidth < 1220) {
      setisPhone(true)
    } else {
      setisPhone(false)
    }
  }, [isphone]);


  useEffect(() => {
    const elements = document.querySelectorAll(".stacks__container_grid_stack")
    elements.forEach(element => {
      element.addEventListener("mouseenter", (e) => {
        console.dir(e)
        const bulle = document.createElement("div")
        bulle.className = "bulle"
        bulle.style.left = e.offsetX + "px"
        bulle.style.top = e.offsetY + "px"
        const point = document.createElement("p")
        point.innerText = "+1 point"
        point.className = "point"
        point.style.left =  e.clientX + "px"
        point.style.top = e.clientY + "px"
        point.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)";
        element.appendChild(bulle)
        ref.current.appendChild(point)
        setPoints(prev => prev + 1)
        setTimeout(() => {
          element.removeChild(bulle)
          ref.current.removeChild(point)
        }, 1000);
      })
    })
    return () => {
      elements.forEach(element => {
        element.removeEventListener("mouseenter", () => (e) => {
          setPoints(prev => prev + 1)
          console.dir(e)
          const bulle = document.createElement("div")
          bulle.className = "bulle"
          bulle.style.left = e.offsetX + "px"
          bulle.style.top = e.offsetY + "px"
          element.appendChild(bulle)
          setTimeout(() => {
            element.removeChild(bulle)
          }, 1000);
        })
      })
    };
  }, []);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delay: .1
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  

  return !isphone ? (
    <motion.div style={{y: translate}} ref={doc} initial="hidden"
    whileInView="visible" variants={list} transition={{delay: .1, duration: 1, ease: "easeOut", staggerChildren: 1}}  onViewportEnter={() => {startTimer("expert")}} onViewportLeave={() => closeTimer("expert")} className='stacks__container_big'>
        <motion.h2 style={{y: translate2}} className='stacks__container_big_title'>Mes expertises actuelles <span style={{fontSize: 50}}>💜</span></motion.h2>
      <div ref={stack} className='stacks__container'>
          <motion.div className="stacks__container_grid">
            <h3 className='stack_subtitle'>Front-end</h3>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Html | CSS</p>
            <SiHtml5 size={50}/>
            <SiCss3 size={50}/>
            </motion.div>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>JavaScript</p>
            <SiJavascript size={50}/>
            </motion.div>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>ReactJS</p>
            <SiReact size={50}/>
            </motion.div>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>React Router</p>
            <SiReactrouter size={50}/>
            </motion.div>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Axios</p>
            <SiAxios size={50}/>
            </motion.div>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Framer-Motion</p>
            <SiFramer  size={50}/>
            </motion.div>
          </motion.div>
          <div className="stacks__container_grid">
            <h3 className='stack_subtitle'>Back-end</h3>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>NodeJS</p>
            <SiNodedotjs   size={50}/>
            </motion.div>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Express</p>
            <SiExpress   size={50}/>
            </motion.div>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Mongodb</p>
            <SiMongodb   size={50}/>
            </motion.div>
            <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Mongoose</p>
            <SiMongoose   size={50}/>
            </motion.div>

          </div>
          <div className="stacks__container_grid">
          <h3 className='stack_subtitle'>Autres</h3>
          <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Git</p>
            <SiGit    size={50}/>
            </motion.div>
          <motion.div variants={item} className="stacks__container_grid_stack">
              <p>GitHub</p>
            <SiGithub    size={50}/>
            </motion.div>
          <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Figma</p>
            <SiFigma    size={50}/>
            </motion.div>
          <motion.div variants={item} className="stacks__container_grid_stack">
              <p>Adobes</p>
            <SiAdobe    size={50}/>
            </motion.div>
          </div>
      </div>
    </motion.div>
  ) :  <motion.div  ref={doc}   initial="hidden"
    whileInView="visible" variants={list} transition={{delay: .1, duration: 1, ease: "easeOut", staggerChildren: 1}}  onViewportEnter={() => {startTimer("expert")}} onViewportLeave={() => closeTimer("expert")} className='stacks__container_big'>
        <h2 className='stacks__container_big_title'>Mes expertises actuelles <span style={{fontSize: 50}}>💜</span></h2>
      <div className='stacks__container'>
          <motion.div className="stacks__container_grid">
            <h3 className='stack_subtitle'>Front-end</h3>
            <motion.div  variants={item}   whileInView="visible" initial="hidden"
 transition={{delay: .1}} className="stacks__container_grid_stack">
              <p>Html | CSS</p>
            <SiHtml5 size={50}/>
            <SiCss3 size={50}/>
            </motion.div>
            <motion.div variants={item}   whileInView="visible" initial="hidden"
 transition={{delay: .1}}className="stacks__container_grid_stack">
              <p>JavaScript</p>
            <SiJavascript size={50}/>
            </motion.div>
            <motion.div variants={item}   whileInView="visible" initial="hidden"
 transition={{delay: .1}}className="stacks__container_grid_stack">
              <p>ReactJS</p>
            <SiReact size={50}/>
            </motion.div>
            <motion.div variants={item}   whileInView={"visible"} initial="hidden"
 transition={{delay: .1}} className="stacks__container_grid_stack">
              <p>React Router</p>
            <SiReactrouter size={50}/>
            </motion.div>
            <motion.div variants={item}   whileInView={"visible"} initial="hidden"
 transition={{delay: .1}}className="stacks__container_grid_stack">
              <p>Axios</p>
            <SiAxios size={50}/>
            </motion.div>
            <motion.div variants={item}   whileInView={"visible"} initial="hidden" transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>Framer-Motion</p>
            <SiFramer  size={50}/>
            </motion.div>
          </motion.div>
          <div className="stacks__container_grid">
            <h3 className='stack_subtitle'>Back-end</h3>
            <motion.div variants={item}   whileInView={"visible"} initial="hidden"transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>NodeJS</p>
            <SiNodedotjs   size={50}/>
            </motion.div>
            <motion.div variants={item}   whileInView={"visible"} initial="hidden"transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>Express</p>
            <SiExpress   size={50}/>
            </motion.div>
            <motion.div variants={item}   whileInView={"visible"} initial="hidden"transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>Mongodb</p>
            <SiMongodb   size={50}/>
            </motion.div>
            <motion.div variants={item}   whileInView={"visible"} initial="hidden"transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>Mongoose</p>
            <SiMongoose   size={50}/>
            </motion.div>

          </div>
          <div className="stacks__container_grid">
          <h3 className='stack_subtitle'>Autres</h3>
          <motion.div variants={item}   whileInView={"visible"} initial="hidden"transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>Git</p>
            <SiGit    size={50}/>
            </motion.div>
          <motion.div variants={item}   whileInView={"visible"} initial="hidden"transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>GitHub</p>
            <SiGithub    size={50}/>
            </motion.div>
          <motion.div variants={item}   whileInView={"visible"} initial="hidden"transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>Figma</p>
            <SiFigma    size={50}/>
            </motion.div>
          <motion.div variants={item}   whileInView={"visible"} initial="hidden"transition={{delay: .1}} 
 className="stacks__container_grid_stack">
              <p>Adobes</p>
            <SiAdobe    size={50}/>
            </motion.div>
          </div>
      </div>
    </motion.div>
} 
)