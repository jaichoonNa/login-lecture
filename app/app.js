"use strict";

const path = require('path'); 

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT =  3000;

//라우팅
const home = require("./src/routes/home");

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, './src/views')); 

app.use(express.static(path.join(__dirname, './src/public')));
//app.use(express.static('./src/public'));  // 이 방식도 작동함
//app.use(express.static('${__dirname}'/src/public'));  // 강의에서 알려준 방식이나 작동 안함

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// url을 통해 전달되는 데이터에 한글, 공백 등과 같으 문자가 포함될경우 제대로 인식되지 않는 문제 해결


app.use("/", home); //use 는 미들웨어를 등록해주는 메서드

// 앱 세팅
// app.set("views", "./views");  윈도우에서 작동 되지 않음
// app.set("viw engine","ejs");
//app.engine('html', require('ejs').renderFile);

module.exports = app;