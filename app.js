"use strict";

const path = require('path'); 

//모듈
const express = require("express");
const app = express();
const PORT =  3000;

//라우팅
const home = require("./routes/home");

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use("/", home); //use 는 미들웨어를 등록해주는 메서드

// 앱 세팅
// app.set("views", "./views");  윈도우에서 작동 되지 않음
// app.set("viw engine","ejs");
//app.engine('html', require('ejs').renderFile);

module.exports = app;