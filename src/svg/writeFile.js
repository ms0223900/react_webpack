/* eslint-disable no-undef */
/* eslint-disable quotes */
var fs = require("fs");
// var express = require('express');

module.exports = write = () => {
  let totalData = ''
  const datas = fs.readdirSync('src/routeFiles')
  for (let i = 0; i < datas.length; i++) {
    let file = fs.readdirSync('src/routeFiles')[i]
    let fileCxt = fs.readFileSync(`src/routeFiles/${file}`, 'UTF-8')
    totalData += fileCxt
  }
  fs.writeFileSync('src/routeFiles/routeDataAll.txt', totalData, err => {
    if(err) throw err
    console.log(fs.readFileSync('src/routeFiles/routeDataAll.txt', 'UTF-8'))
  })
}