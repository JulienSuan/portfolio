import React, { useEffect, useRef } from 'react'
import "./Contact.css"

export default function Contact({setoffcontact,refresh}) {

    const containeeer = useRef(null)

    useEffect(() => {
      
        setoffcontact(containeeer.current.offsetTop)
    }, [containeeer, refresh]);
  return (
    <div ref={containeeer} className='contact_container'>

    </div>
  )
}
