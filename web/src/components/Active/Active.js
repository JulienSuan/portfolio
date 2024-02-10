import React from 'react'
import "./Active.css"
import { motion } from 'framer-motion';
import sound from "../../assets/sfx/se_plop copy.ogg"


export default function Active({setactiveSound,activeSound,  setheChoosed, setCursorVariant, setCursorVariant2, setoveroui, setovernon}) {


    
  return (
    <motion.div className='active_cont'>
        <h1>Activer les sfx ?</h1>
        <div  className="flexmoi_a">
            <motion.div onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
        onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
          setCursorVariant("hover")
          setactiveSound(true)
          setCursorVariant2("hover")
        }} onMouseLeave={() => {
          setCursorVariant("default")
          setCursorVariant2("default2")
        }}   className="ouiouioui" onClick={() => {setactiveSound(true); setheChoosed(true); if (activeSound) {
          const sfx = new Audio(sound); sfx.volume = .1; sfx.play()
        }}}>
                  <p id='testouille' className='pimped'>Oui</p>
            </motion.div>
            <motion.div onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
        onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
          setactiveSound(false)
          setCursorVariant("hover")
          setCursorVariant2("hover")
        }} onMouseLeave={() => {
          setCursorVariant("default")
          setCursorVariant2("default2")
        }}   className="nonnonnon" onClick={() => {setactiveSound(false); setheChoosed(true)}}>
                <p>Non</p>
            </motion.div>
          
        </div>
    </motion.div>
  )
}
