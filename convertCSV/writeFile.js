/* eslint-disable no-undef */
/* eslint-disable quotes */
var fs = require("fs");
var Convert_Yunlin = require('./ConvertCSV')
// var express = require('express');

module.exports = write = (location) => {
  // let totalData = ''
  let dataArr = []
  const datas = fs.readdirSync(`src/routeFiles/${location}`)

  for (let i = 0; i < datas.length; i++) {
    let file = fs.readdirSync(`src/routeFiles/${location}`)[i]
    let fileCxt = fs.readFileSync(`src/routeFiles/${location}/${file}`, 'UTF-8')
    if(location === 'Yunlin') {
      dataArr = [...dataArr, ...Convert_Yunlin(fileCxt)]
      // console.log(dataArr[i])
    } else if(location === 'ChiaYi') {
      dataArr = [...dataArr, ...Convert_Yunlin(fileCxt)]
      // console.log(dataArr[i])
    }
  }

  // for dev-server
  fs.writeFileSync(`public/allRoutes_${location}.json`, JSON.stringify(dataArr), err => {
    if(err) throw err
  })
  // for npm start
  fs.writeFileSync(`dist/allRoutes_${location}.json`, JSON.stringify(dataArr), err => {
    if(err) throw err
  })

}