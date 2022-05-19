"use strict";
const express = require("express");
const app = express();

const log = new(require("./utils/log"))("nyana.moe", "#9e6eff");
require('dotenv').config();
const path = require("path");



app.get("/", (req, res)=>{
    log.log(`Request received » GET '${req.url}' ༅⁺೨*˚·`);
    res.sendFile(path.join(__dirname, "/www/index.html"));
});


app.listen(process.env.PORT, (err) =>{
    if(err){
        log.log("Something went wrong...");
        log.error(err);
        return;
    }
    log.start(`Listening on port ${process.env.PORT}`);
});