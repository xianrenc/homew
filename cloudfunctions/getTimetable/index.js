// 云函数入口文件
const cloud = require('wx-server-sdk')
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  var events = require("events");
  var emitter = new events.EventEmitter()
  const loginUrl ="http://elite.nju.edu.cn/jiaowu/login.do";
  const targetUrl = "http://elite.nju.edu.cn/jiaowu/student/teachinginfo/courseList.do?method=currentTermCourse";


  var browserMsg={
    "Referer": "http://elite.nju.edu.cn/jiaowu/exit.do",
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
    "Host": "elite.nju.edu.cn",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  postdataUserInfo = {
    'userName': "171250593",
    'password': "Chy919810",
    'ValidateCode': "3jpc",
    'returnUrl': "null",
  }; 

  
  
  
  
}

let result = exports.main({
  a: 1,
  b: 2
}, {})
