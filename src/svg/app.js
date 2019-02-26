
import React from 'react'
import '../../styles/style.scss'

import SVGPaper from './SVGPaper'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      routes: [],
    };
  }

  convertExcelToOBj = () => {
    const { text } = this.state;
    let arr = [];
    for(let i in text.split('\n')) {
      arr[i] = text.split('\n')[i].split('	')
    }
    let routeInfo = {
      number: arr[0][0],
      fromTo: [arr[1][0], arr[1][1]],
      fromToEng: [arr[2][0], arr[2][1]],
    }

    arr = arr.slice(6)
    let dataArr = []
    for (let i = 0; i < arr[0].length; i++) {
      dataArr = [...dataArr, {
        id: i,
        stopName: arr[0][i],
        stopType: arr[1][i],
      }]
    }

    this.setState({
      routeData: dataArr,
      routeInfo: routeInfo
    })
  }
  componentWillMount = () => {
    // const routePath = '../src/routeFiles/routeDataAll.txt'
    const routePath = 'routeDataAll.txt'
    fetch(routePath)
      .then(res => res.text())
      .then(txt => { 
        let fetchData = txt.split('\n')
         //single row
        fetchData = fetchData.map(arr => arr.split(',').filter(d => d.trim().length > 0))
        for (let i = 0; i < fetchData.length; i++) {
          if(i % 8 === 2 && fetchData[i].length === 0) {
            fetchData[i] = ['', '']
          }
        }
        fetchData = fetchData.filter(t => t.length > 0)
        console.log(fetchData)


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
        
        console.log(routes)
        

        this.setState({
          routes: routes,
        })
      })
      
  }
  componentDidMount = () => {
    console.log('load success!')
  }
  
  render() {
    const { routes } = this.state;
    return (
      <React.Fragment>
        <div>
          {routes.map(r => (
            <SVGPaper routes={r} />
          ))}
        </div>
        <div>
          路線資料載入中...
        </div>
      </React.Fragment>
    );
  }
}



