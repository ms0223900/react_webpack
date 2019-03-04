/* eslint-disable no-undef */
/* eslint-disable quotes */
var fs = require("fs");
var Convert_Yunlin = require('./ConvertCSV')
// var express = require('express');

module.exports = write = (location) => {
  let totalData = ''
  let dataArr = []
  const datas = fs.readdirSync(`src/routeFiles/${location}`)

  for (let i = 0; i < datas.length; i++) {
    let file = fs.readdirSync(`src/routeFiles/${location}`)[i]
    let fileCxt = fs.readFileSync(`src/routeFiles/${location}/${file}`, 'UTF-8')
    if(location === 'Yunlin') {
      dataArr = [...dataArr, ...Convert_Yunlin(fileCxt)]
      console.log(dataArr[i])
    //   fileCxt = fileCxt.split('\n').filter(t => t.trim().length > 0)
    //   console.log(fileCxt.length)
    //   if(fileCxt.length % 14 !== 0) {
    //     fileCxt = [...fileCxt, '', '', '']
    //     fileCxt = fileCxt.join('\n')
    //     fileCxt = fileCxt.slice(1, fileCxt.length)
    //   } else {
        
    //     fileCxt = fileCxt.join('\n')
    //     fileCxt = fileCxt.slice(1, fileCxt.length)
    //   }
      
    // }
    // if(i > 0 && location !== 'Yunlin') {
    //   totalData += '\n'
    // }
    // totalData += fileCxt
    } 
    // for test
    fs.writeFileSync(`public/routeDataAll_${location}.txt`, totalData, err => {
      if(err) throw err
      // console.log(fs.readFileSync(`src/routeFiles/routeDataAll_${location}.txt`, 'UTF-8'))
    })
    // for npm start
    fs.writeFileSync(`dist/routeDataAll_${location}.txt`, totalData, err => {
      if(err) throw err
      console.log(fs.readFileSync(`src/routeFiles/routeDataAll_${location}.txt`, 'UTF-8'))
    })
    fs.writeFileSync('dist/test.json', JSON.stringify(dataArr))
    // const readTest = fs.readFileSync('./dist/test.json')

  }
}