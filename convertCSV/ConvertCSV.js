const slitCSV = (csv) => {
  let CSV = csv.split('\n')
  //single row
  CSV = CSV.map(arr => arr.split(',').filter(d => d.trim().length > 0))
  for (let i = 0; i < CSV.length; i++) {
    if(i % 8 === 2 && CSV[i].length === 0) {
      CSV[i] = ['', '']
    }
  }
  CSV = CSV.filter(t => t.length > 0)
  return CSV
} 


const Convert_ChiaYi = (csv) => {
  const fetchData = slitCSV(csv)
  // console.log(fetchData)

  //split into multi row
  let multiRoute = []
  for (let i = 0; i < fetchData.length / 5; i++) {
    multiRoute[i] = fetchData.slice(5 * i, 4 + (5 * i + 1))
  }
  //multi route data
  let routeData = []
  for (let i = 0; i < multiRoute.length; i++) {
    routeData[i] = []
    for (let j = 0; j < multiRoute[i][3].length; j++) {
      routeData[i] = [
        ...routeData[i],
        {
          id: j,
          stopName: multiRoute[i][3][j],
          stopType: multiRoute[i][4][j]
        }
      ]
    }
  }
  //multi route info
  let routes = []
  for (let i = 0; i < multiRoute.length; i++) {
  const engName = multiRoute[i][2].length === 0 ? ['', ''] : multiRoute[i][2]
    routes[i] = {
      number: multiRoute[i][0][0],
      fromTo: [multiRoute[i][1][0], multiRoute[i][1][1]],
      fromToEng: [engName[0], engName[1]],
      data: routeData[i]
    }
  }
  return routes
}

const Convert_Yunlin = (csv) => {
  let CSV = csv.split('\r\n').map(d => d.replace('\n', ''))
  if(CSV.length % 14 !== 0) {
    CSV = [...CSV, '']
  }
  // console.log(CSV)
  //single row
  CSV = CSV.map(arr => arr.split(',').filter(d => d.length > 0))
  for (let i = 0; i < CSV.length; i++) {
    if(i % 14 === 12 && CSV[i].length === 0 || 
      i % 14 === 13 && CSV[i].length === 0) {
      CSV[i] = ['']
    }
  }
  
  //14 a row
  let multiRoute = []
  for (let i = 0; i < ~~(CSV.length / 14); i++) {
    multiRoute[i] = CSV.slice(14 * i, 13 + (14 * i + 1))
  }
  CSV = multiRoute
  // console.log(multiRoute)

  //multi routes
  let routeData = []
  for (let i = 0; i < multiRoute.length; i++) {
    routeData[i] = []
    for (let j = 0; j < multiRoute[i][8].length; j++) {
      routeData[i] = [
        ...routeData[i],
        {
          id: j,
          stopName: multiRoute[i][8][j],
          stopNameEng: multiRoute[i][9][j],
          stopType: multiRoute[i][10][j]
        }
      ]
    }
  }

  //route info
  let routes = []
  for (let i = 0; i < multiRoute.length; i++) {
  const engName = multiRoute[i][2].length === 0 ? ['', ''] : multiRoute[i][2]
    routes[i] = {
      number: multiRoute[i][0][0],
      fromTo: [multiRoute[i][1][0], multiRoute[i][1][1]],
      pass:[...multiRoute[i][1].slice(2).filter(t => t.search(/[A-Z]/gi) === -1)],
      fromToEng: [engName[0], engName[1]],
      charge:multiRoute[i][3][0],
      companyService: multiRoute[i][4],
      time: [...multiRoute[i].slice(5, 8).filter(t => t.length > 0)],
      stopNow: multiRoute[i][11], 
      byPass: multiRoute[i][12], 
      byPassEng: multiRoute[i][13], 
      data: routeData[i]
    }
  }

  return routes
}

module.exports = {
  Convert_ChiaYi, 
  Convert_Yunlin
}