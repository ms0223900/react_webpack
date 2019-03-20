/* eslint-disable no-undef */
/* eslint-disable quotes */
var fs = require("fs");
var { Convert_Yunlin, Convert_ChiaYi, Convert_ChanHua }  = require('./ConvertCSV')
// var express = require('express');

module.exports = write = (location) => {
  // let totalData = ''
  let dataArr = []
  const datas = fs.readdirSync(`src/routeFiles/${location}`)

  for (let i = 0; i < datas.length; i++) {
    let file = fs.readdirSync(`src/routeFiles/${location}`)[i]
    // console.log(file)
    let fileCxt = fs.readFileSync(`src/routeFiles/${location}/${file}`, 'UTF-8')
    // console.log(fileCxt)
    if(location === 'Yunlin') {
      dataArr = [...dataArr, ...Convert_Yunlin(fileCxt)]
    } else if(location === 'ChiaYi') {
      dataArr = [...dataArr, ...Convert_ChiaYi(fileCxt)]
    } else if(location === 'ChanHua') {
      dataArr = [...dataArr, ...Convert_ChanHua(fileCxt)]
      
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