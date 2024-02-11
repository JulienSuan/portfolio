import React, { useEffect, useRef, useState } from 'react';
import "./Contact.css";

export default function Contact({ setoffcontact, refresh }) {

  const containeeer = useRef(null);
  
const [states, setstates] = useState({
  nom: "",
  email: "",  
  para: ""
});

const handleSubmit = async (e) => {
  e.preventDefault();

  const json = JSON.stringify(states)

  console.log(json)

  try {
    const response = await fetch('https://portfolio-iota-nine-53.vercel.app/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    });

    console.log(response)

    if (response.ok) {
      console.log('Email envoyé avec succès');
    } else {
      console.error('Erreur lors de l\'envoi de l\'email');
    }
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
  }
};


  useEffect(() => {
    setoffcontact(containeeer.current.offsetTop);
  }, [containeeer, refresh]);

  return (
    <div ref={containeeer} className='contact_container'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            value={states.nom}
            onChange={(e) => setstates({ ...states, nom: e.target.value })}
            id="name"
            name="name"
          />
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            value={states.email}
            onChange={(e) => setstates({ ...states, email: e.target.value })}
            id="Email"
            name="Email"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={states.para}
            onChange={(e) => setstates({ ...states, para: e.target.value })}
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
