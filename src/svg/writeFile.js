/* eslint-disable no-undef */
/* eslint-disable quotes */
var fs = require("fs");
// var express = require('express');

module.exports = write = (location) => {
  let totalData = ''
  const datas = fs.readdirSync(`src/routeFiles/${location}`)
  fs.writeFileSync('src/routeFiles/routeDataAll.txt','')
  for (let i = 0; i < datas.length; i++) {
    let file = fs.readdirSync(`src/routeFiles/${location}`)[i]
    let fileCxt = fs.readFileSync(`src/routeFiles/${location}/${file}`, 'UTF-8')
    if(i > 0) {
      totalData += '\n'
      if(location === 'Yunlin' && fileCxt.split('\n').length % 14 !== 0) {
        totalData += '\n' + '\n'
      }
    }
    totalData += fileCxt
  }
  // for test
  fs.writeFileSync(`public/routeDataAll_${location}.txt`, totalData, err => {
    if(err) throw err
    console.log(fs.readFileSync(`src/routeFiles/routeDataAll_${location}.txt`, 'UTF-8'))
  })
  // for npm start
  fs.writeFileSync(`dist/routeDataAll_${location}.txt`, totalData, err => {
    if(err) throw err
    console.log(fs.readFileSync(`src/routeFiles/routeDataAll_${location}.txt`, 'UTF-8'))
  })
}