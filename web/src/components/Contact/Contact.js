import React, { useEffect, useRef, useState } from 'react';
import "./Contact.css";

export default function Contact({ setoffcontact, refresh }) {

  const containeeer = useRef(null);
  const [states, setstates] = useState({
    nom: "",
    prénom: "",
    société: "",
    para: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(states);


    
  };

  useEffect(() => {
    setoffcontact(containeeer.current.offsetTop);
  }, [containeeer, refresh]);

  return (
    <div ref={containeeer} className='contact_container'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="lastname">Nom de famille</label>
          <input
            type="text"
            value={states.nom}
            onChange={(e) => setstates({ ...states, nom: e.target.value })}
            id="lastname"
            name="lastname"
          />
        </div>

        <div>
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            value={states.prénom}
            onChange={(e) => setstates({ ...states, prénom: e.target.value })}
            id="firstname"
            name="firstname"
          />
        </div>

        <div>
          <label htmlFor="société">Société</label>
          <input
            type="text"
            value={states.société}
            onChange={(e) => setstates({ ...states, société: e.target.value })}
            id="société"
            name="société"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={states.message}
            onChange={(e) => setstates({ ...states, message: e.target.value })}
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
