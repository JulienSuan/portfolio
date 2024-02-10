import React, { useState } from 'react';
import { GiSoundOn, GiSoundOff } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import sgvon from '../../assets/sounds/sound-on.svg';
import sgvoff from '../../assets/sounds/sound-off.svg';
import './Sfx.css'

function Sfx({ setactiveSound, activeSound, heChoosed, setCursorVariant, setCursorVariant2 }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50, x: heChoosed ? 0 : 50 },
    visible: { opacity: 1, y: 0, x: heChoosed ? 0 : 50 },
    init: { opacity: 1, y: -50, x: heChoosed ? 0 : 50 },
  };

  const imgContainerStyle = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgba(245, 245, 245, 0.767)',
    zIndex: heChoosed ? 9999 : 999999,
    width: heChoosed ? '50px' : '80px',
    transform: heChoosed ? 'translateX(50%)' : 'translateX(50%)',
    right: heChoosed ? '1.75em' : '50%',
    top: heChoosed ? '1.5em' : '60%',
    cursor: "pointer",
  };

  const imgStyle = {
    objectFit: 'contain',
  };

  return (
    <AnimatePresence mode="popLayout">
      {activeSound ? (
        <motion.img  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
        onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
          setCursorVariant("hover")
          setCursorVariant2("hover")
        }} onMouseLeave={() => {
          setCursorVariant("default")
          setCursorVariant2("default2")
        }}
          key="activeImage"
          className='kel_svg'
          layout
          style={{ ...imgContainerStyle }}
          onClick={() => setactiveSound(!activeSound)}
          variants={containerVariants}
          initial="init"
          animate="visible"
          exit="hidden"
          src={sgvon}
        />
      ) : (
        <motion.img  onMouseDown={() => {setCursorVariant("tap") ; setCursorVariant2("tap")}} 
        onMouseUp={() => {setCursorVariant("hover") ; setCursorVariant2("hover")}} onMouseEnter={() => {
          setCursorVariant("hover")
          setCursorVariant2("hover")
        }} onMouseLeave={() => {
          setCursorVariant("default")
          setCursorVariant2("default2")
        }}
          key="inactiveImage"
          className='kel_svg'
          layout
          style={{ ...imgContainerStyle }}
          onClick={() => setactiveSound(!activeSound)}
          variants={containerVariants}
          initial="init"
          animate="visible"
          exit="hidden"
          src={sgvoff}
        />
      )}
    </AnimatePresence>
  );
}

export default React.memo(Sfx);
