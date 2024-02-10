const nodemailer = require("nodemailer");
const express = require("express");
const fs = require("fs")
const inlineCss = require("inline-css")
const hogan = require("hogan.js")
require('dotenv').config();
const cors = require("cors")


const app = express();

// LES MIDDLEWARES
app.use(express.json());
app.use(cors())

app.listen(8080, () => {
    console.log('serveur lancé');
});


"use strict";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "jbigot.dev@gmail.com",
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false // Désactiver la vérification du certificat
    }
});

app.get("/", (req, res) => {
    res.send("boo !")
})


app.post('/email', async (req, res) => {
    console.log(req.body);
  
    try {
      const { para, nom, prénom, société } = req.body;
      console.log(req.body);
  
      if (para && nom && prénom ) {
        const file = fs.readFileSync(__dirname + '/mailTemplate/template.html');
        const filecss = await inlineCss(file.toString(), { url: 'file://' + __dirname + '/mailTemplate/' });
        const templateCompiled = hogan.compile(filecss);
        const templateRender = templateCompiled.render({ para, nom, prénom, société });
  
        const mailOptions = {
          from: 'votre_email@gmail.com',
          to: 'jbigot.dev@gmail.com',
          subject: 'Contact Portfolio',
          html: templateRender
        };
  
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
  
        res.send('Email envoyé');
      } else {
        res.status(400).send('Il manque des informations dans le formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      res.status(500).send('Erreur lors de l\'envoi de l\'email');
    }
  });