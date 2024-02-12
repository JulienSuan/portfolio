import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./Contact.css";
import Alert from './../Alert/Alert';
import sound from "../../assets/sfx/alert.ogg"
import sound2 from "../../assets/sfx/SE_lightbulb.ogg"
import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useMotionValueEvent } from 'framer-motion';
import { useParams } from 'react-router-dom';
import imgninja from "../../assets/Mini-Ninjas-Suzume-meditating-300x300.png"
import cursor1 from "../../assets/sfx/SYS_cursor.ogg"
import cursor2 from "../../assets/sfx/SYS_cursor.ogg"
import calc from "../../assets/sfx/GEN_item_get.ogg"




const soundi = new Audio(sound)
soundi.volume = .1
const soundi2 = new Audio(sound2)
soundi.volume = .05
const cursor11 = new Audio(cursor1)
cursor11.volume = .1
const cursor22 = new Audio(cursor2)
cursor22.volume = .05
const calc1 = new Audio(calc)
calc1.volume = .05
function Contact({ setoffcontact, refresh, activeSound, setCursorVariant, setCursorVariant2 }) {



  
  
  const {ninja} = useParams()


  const containeeer = useRef(null);
  const [isAlert, setisAlert] = useState(false);
  const [alrt, setalrt] = useState(false);
  const email = useRef(null)
  

 
const [states, setstates] = useState({
  nom: "",
  email: "",  
  para: ""
});

const activeAlert = () => {
  navigator.clipboard.writeText("jbigot.dev@gmail.com")
  if (!alrt && activeSound) {
    soundi2.play()
  }
  setalrt(true)
  const time = setTimeout(() => {
    setalrt(false)
  }, 3000);
  if (alrt) {
    clearTimeout(time)
  }
}

const [isLoading, setisLoading] = useState(false);
const [isSended, setisSended] = useState(false);

const handleSubmit = useCallback(async (e) => {

  
  e.preventDefault();
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  
  if (ValidateEmail(states.email)) {
    const json = JSON.stringify(states);
    
    console.log(json);
    
    try {
      setisLoading(true)
      const response = await fetch('https://portfolio-iota-nine-53.vercel.app/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      });

      console.log(response);

      if (response.ok) {
        if (activeSound) {
          calc1.play()
        }
        setstates({
          para: "",
          email: "",
          nom: ""
        })
      setisSended(true)
      setTimeout(() => {
        setisSended(false)
      }, 3000);
      setisLoading(false)

        console.log('Email envoyé avec succès');
      } else {
      setisLoading(false)
        console.error('Erreur lors de l\'envoi de l\'email');
      }
    } catch (error) {
      setisLoading(false)
      console.error('Erreur lors de la requête:', error);
    }
  } else {
    if (!isAlert && activeSound) {
      soundi.play();
    }
    setisAlert(true);
    email.current.focus();
    email.current.style.backgroundColor = "#a78bfa2d"

    const time = setTimeout(() => {
    email.current.style.backgroundColor = "rgba(0, 0, 0, 0.527)"
      setisAlert(false);
    }, 3000);
    if (isAlert) {
      clearTimeout(time)
    }
  }
}, [isAlert, activeSound, states.email, states.nom, states.para]);

const [isHere, setisHere] = useState(false);



const scroll1 = useScroll({
  target: containeeer,
  offset: ["start end", "end start"],
})

const translate = useTransform(scroll1.scrollYProgress, [0, .5], [-100, 0])


const [isFocused, setisFocused] = useState(false);
const [isFocused2, setisFocused2] = useState(false);
const [isFocused3, setisFocused3] = useState(false);

useEffect(() => {
  if (activeSound) {
   const sound = [cursor11, cursor22];
   const index = Math.floor(Math.random() * 2 )
    sound[index].play()
    sound[index].currentTime = 0
 }
 
}, [isFocused, isFocused2, isFocused3]);

  useEffect(() => {
    setoffcontact(containeeer.current.offsetTop);
  }, [containeeer, refresh]);

  useMotionValueEvent(translate, "change", (latest) => {
    if (latest > .5) {
            setisHere(true)  
    } else {
            setisHere(false) 
    }
  })



const [isTyping, setisTyping] = useState(false);


  const handleDialogue = () => {
    setisFocused3(true)
    let index = 0;
    const message = "Bonjour Julien ! Bien sûr ! Nous serions ravis que tu puisses nous rejoindre ! Un ninja aussi motivé que toi mérite une belle place au chaud parmi nous ❤ Nous avons hâte de pouvoir faire ample connaissance avec toi. Pas la peine de te faire passer des tests, on te prend direct ! 😇";
    const messageLength = message.length;
    const interval = setInterval(() => {
      if (index < messageLength) {
        setstates(prev => ({...prev, para: message.substring(0, index + 1)}));
        index++;
      } else {
      setisTyping(false)
        clearInterval(interval);
      }
    }, 25);
    if (isTyping) {
      clearInterval(interval);
    }
    setisTyping(true)
  };
  return (
    <div ref={containeeer} className='contact_container'>
      <motion.h2 initial={{y: 0}}  style={{ y:translate, marginBottom: "0"}} className='stacks__container_big_title'>Contact</motion.h2>
      {isAlert && <Alert message={"Vous devez rentrer un mail valide"}></Alert>}
      {alrt &&  <Alert message={"Le mail a été copié dans votre presse-papiers"}></Alert>}
      <form className='formuuu' onSubmit={(e) => handleSubmit(e)}>
      <p><span onMouseEnter={() => {
          setCursorVariant("hover")
          setCursorVariant2("hover")
        }} onMouseLeave={() => {
          setCursorVariant("default")
          setCursorVariant2("default2")
        }}  style={{letterSpacing: 1.5}}  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
        onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onClick={() => activeAlert()} className='pimped'>jbigot.dev@gmail.com</span>.  </p>
          <div className="cont_contact_label">
          
            <motion.label layout style={isFocused && {top: "-25%", left: "1em", fontSize:".75rem", backgroundColor: "black", border : "1px #a78bfa8f solid"}} htmlFor="name">Nom</motion.label>
            <input onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
       
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        
      }}
            onFocus={() => setisFocused(true)}
            onBlur={() => {
              if (!states.nom) {
                 setisFocused(false)
              }
             }}
              type="text"
              value={states.nom}
              onChange={(e) => setstates({ ...states, nom: e.target.value })}
              id="name"
              name="name"
            />
          </div>

        <div className="cont_contact_label"> 
          <motion.label layout style={isFocused2 && {top: "-25%", left: "1em", fontSize:".75rem", backgroundColor: "black", border : "1px #a78bfa8f solid"}}  htmlFor="email">Email</motion.label>
          <input onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
       
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        
      }} ref={email} 
          onFocus={() => setisFocused2(true)}
          onBlur={() => {
            if (!states.email) {
               setisFocused2(false)
            }
           }}
            type="text"
            value={states.email}
            onChange={(e) => setstates({ ...states, email: e.target.value })}
            id="email"
            name="email"
          />
        </div>

        <div className="cont_contact_label">
{ninja && <img onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
       
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        
      }} onClick={handleDialogue} className='ninjaimage' width={90} src={imgninja} alt="" srcset="" />
    }

          <motion.label layout style={isFocused3 && {top: "-5%", left: "1em", fontSize:".75rem", backgroundColor: "black", border : "1px #a78bfa8f solid"}} htmlFor="message">Message</motion.label>
          <textarea onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
       
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        
      }}
          onFocus={() => setisFocused3(true)}
          onBlur={() => {
            if (!states.para) {
               setisFocused3(false)
            }
           }}
            name="message"
            value={states.para}
            onChange={(e) => setstates({ ...states, para: e.target.value })}
            id="message"
            cols="30"
            rows="10"
          >

          </textarea>
        </div>


        <button onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
                    onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
        setCursorVariant("hover")
        setCursorVariant2("hover")
       
      }} onMouseLeave={() => {
        setCursorVariant("default")
        setCursorVariant2("default2")
        
      }} disabled={states.email && states.nom && states.para ? false : true} style={states.email && states.nom && states.para ? {color: "whitesmoke", borderColor: "#a78bfaf0" } : null} type="submit">{isLoading  ? "Chargement" : "Envoyez"}</button>
      </form>
      {isSended && <Alert message={"L'email a été envoyé ! ❤"}></Alert>}
     {isLoading && <motion.span layout initial={{ scale: 0}} animate={{ scale: 1 }} exit={{ scale: 0, opacity: 0 }} class="loader"></motion.span>}
    </div>
  );
}


export default React.memo(Contact)