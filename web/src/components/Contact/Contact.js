import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./Contact.css";
import Alert from './../Alert/Alert';
import sound from "../../assets/sfx/alert.ogg"
import sound2 from "../../assets/sfx/SE_lightbulb.ogg"
import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';

const soundi = new Audio(sound)
soundi.volume = .1
const soundi2 = new Audio(sound2)
soundi.volume = .05

function Contact({ setoffcontact, refresh, activeSound, setCursorVariant, setCursorVariant2 }) {




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
      const response = await fetch('https://portfolio-iota-nine-53.vercel.app/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      });

      console.log(response);

      if (response.ok) {
        console.log('Email envoyé avec succès');
      } else {
        console.error('Erreur lors de l\'envoi de l\'email');
      }
    } catch (error) {
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
}, [states, isAlert, activeSound]);


const scroll1 = useScroll({
  target: containeeer,
  offset: ["start end", "end start"],
})

const translate = useTransform(scroll1.scrollYProgress, [0, .5], [-300, -400])


const [isFocused, setisFocused] = useState(false);
const [isFocused2, setisFocused2] = useState(false);
const [isFocused3, setisFocused3] = useState(false);

  useEffect(() => {
    setoffcontact(containeeer.current.offsetTop);
  }, [containeeer, refresh]);

  return (
    <div ref={containeeer} className='contact_container'>
      <motion.h2  style={{position:"absolute", y: translate}} className='stacks__container_big_title'>Contact</motion.h2>
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
            <input
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
          <input ref={email} 
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
          <motion.label layout style={isFocused3 && {top: "-5%", left: "1em", fontSize:".75rem", backgroundColor: "black", border : "1px #a78bfa8f solid"}} htmlFor="message">Message</motion.label>
          <textarea
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
          ></textarea>
        </div>


        <button disabled={states.email && states.nom && states.para ? false : true} style={states.email && states.nom && states.para ? {color: "whitesmoke", borderColor: "#a78bfaf0" } : null} type="submit">Submit</button>
      </form>
    </div>
  );
}


export default React.memo(Contact)