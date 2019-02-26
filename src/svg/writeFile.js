/* eslint-disable no-undef */
/* eslint-disable quotes */
var fs = require("fs");
// var express = require('express');

module.exports = write = () => {
  let totalData = ''
  const datas = fs.readdirSync('src/routeFiles')
  fs.writeFileSync('src/routeFiles/routeDataAll.txt','')
  for (let i = 0; i < datas.length; i++) {
    let file = fs.readdirSync('src/routeFiles')[i]
    let fileCxt = fs.readFileSync(`src/routeFiles/${file}`, 'UTF-8')
    if(i > 0) {
      totalData += '\n'
    }
    totalData += fileCxt
  }
  // for test
  fs.writeFileSync('public/routeDataAll.txt', totalData, err => {
    if(err) throw err
    console.log(fs.readFileSync('src/routeFiles/routeDataAll.txt', 'UTF-8'))
  })
  // for npm start
  fs.writeFileSync('dist/routeDataAll.txt', totalData, err => {
    if(err) throw err
    console.log(fs.readFileSync('src/routeFiles/routeDataAll.txt', 'UTF-8'))
  })
}