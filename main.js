"use strict";
const express = require("express");
const app = express();

const log = new(require("./utils/log"))("nyana.moe", "#9e6eff");
require('dotenv').config();
const path = require("path");


// Available for usage by website:
app.use(express.static(path.join(__dirname, '/www/public')));

// Main page:
app.get("/", (req, res)=>{
    log.log(`Request received » GET '${req.path}' ༅⁺೨*˚·`);
    res.sendFile(path.join(__dirname, "/www/index.html"));
});

app.get("/genshin", (req, res)=>{
    log.log(`Request received » GET '${req.path}' ༅⁺೨*˚·`);
    res.sendFile(path.join(__dirname, "/www/genshin.html"));
});

app.get("/contact", (req, res)=>{
    log.log(`Request received » GET '${req.path}' ༅⁺೨*˚·`);
    res.sendFile(path.join(__dirname, "/www/contact.html"));
});

app.get("/download/:file", (req, res)=>{
    log.log(`Request recieved » DOWNLOAD '${req.path, req.params.file}' ༅⁺೨*˚·`);
    try {
        const file = `${__dirname}/www/public/files/${req.params.file}`;
        if (file){
            res.download(file);
        }
    } catch (err) {
        log.log("Something went wrong...");
        log.error(err);
        res.statusCode(404);
        return;
    }
    
})

// Run the website
app.listen(process.env.PORT, (err) =>{
    if(err){
        log.log("Something went wrong...");
        log.error(err);
        return;
    }
    log.start(`Listening on port ${process.env.PORT}`);
});