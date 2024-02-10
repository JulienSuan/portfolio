const nodemailer = require("nodemailer");
const express = require("express");
const fs = require("fs")
const inlineCss = require("inline-css")
const hogan = require("hogan.js")
require('dotenv').config();


const app = express();

// LES MIDDLEWARES
app.use(express.json());

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


app.post("/email", async(req, res) => {

    const {para, nom, prénom, société} = req.body

    console.log(req.body)


    if (para, nom, prénom) {
        
        const file = fs.readFileSync("./mailTemplate/template.html")
        const filecss = await inlineCss(file.toString(), {url: "file://" + __dirname + "/mailTemplate/"})
        const templateCompiled = hogan.compile(filecss)
        const templateRender = templateCompiled.render({para, nom, prénom, société})
        
        const message = {
            from: "test@gmail.com",
            to: "jbigot.dev@gmail.com",
            subject: "Contact Portfolio",
            html: templateRender
        };
        
        const info = await transporter.sendMail(message);
        console.log("Message sent: %s", info.messageId);
    
        res.send("email envoyé")
    } else {
        res.send("il manque des informations")
    }

})

