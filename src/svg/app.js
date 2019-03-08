/* eslint-disable no-unused-vars */
import React from 'react'
import '../../styles/style.scss'

import { SVGPaper_ChiaYi, SVGPaper_Yunlin, SVGPaper_ChanHua } from './SVGPaper'

// const $class = (className) => document.getElementsByClassName(className)
// const $id = (id) => document.getElementById(id)
// const $all = (all) => document.querySelectorAll(all)

const loadLocationSVG = (location, routes) => {
  switch (location) {
    case 'ChiaYi':
      return routes.map(r => <SVGPaper_ChiaYi routes={r} location={location} onLoad={console.log('11')} />)
    case 'Yunlin':
      return routes.map(r => <SVGPaper_Yunlin routes={r} location={location} />)
    case 'ChanHua':
      return routes.map(r => <SVGPaper_ChanHua routes={r} location={location} />)

    default:
      return ''
  }
}

const routeLocations = ['ChiaYi', 'Yunlin', 'ChanHua']

const fetchURLSetting = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain;charset=UTF-8',
  },
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      routes: [],
      location: 'ChiaYi',
      loadComplete: 0,
    };
  }

  componentWillMount = () => {
    const { location } = this.state
    for (let i = 0; i < routeLocations.length; i++) {
      const routeName = routeLocations[i]
      this.fetchRouteJSON(routeName)
    }
    
  }
  componentDidMount = () => {
    console.log('load success!')
    document.title = this.state.location + 'SVG'
  }
  componentDidUpdate = (prevProps, prevState) => {
    if(this.state.location !== prevState.location) {
      document.title = this.state.location + 'SVG'
    }
    if(this.state.routes.length !== prevState.routes.length) {
      this.setState((state) => ({
        loadComplete: state.loadComplete + 1,
      }))
    }
  }
  
  fetchRouteJSON = (locationName) => {
    fetch(`allRoutes_${locationName}.json`)
      .then(res => res.json())
      .then(routeJSON => { 
        if(locationName === 'ChiaYi') {
          fetch('http://ebus.cyhg.gov.tw/cms/api/route', fetchURLSetting)
            .then(res => res.json())
            .then(routesInfo => {
              console.log('chiayi', routeJSON)
              let getProviderId = []
              for (let i = 0; i < routeJSON.length; i++) {
                const routeNum = routeJSON[i].number
                getProviderId[i] = routesInfo.filter(rs => rs.NameZh.trim() === routeNum.trim()).map(arr => arr = arr.ProviderId)
              }
              
              fetch('http://ebus.cyhg.gov.tw/cms/api/provider', fetchURLSetting)
                .then(res => res.json())
                .then(providerInfo => {
                  let getProviderInfo = []
                  for (let j = 0; j < getProviderId.length; j++) {
                    getProviderInfo[j] = getProviderId[j]
                      .map(id => id = providerInfo
                        .filter(pro => pro.Id === id)
                        .map(arr => arr = arr.NameZh.replace('鼠?', '公總') + ': ' + arr.telephone)).map(info => info = info[0])
                    routeJSON[j] = {...routeJSON[j], companyService: getProviderInfo[j]}
                  }
                  
                  this.setState({
                    routes: [...this.state.routes, {
                      location: locationName,
                      routeData: routeJSON,
                    }],
                  })
                })
          })
        } else {
          console.log(routeJSON)
          this.setState({
            routes: [...this.state.routes, {
              location: locationName,
              routeData: routeJSON,
            }],
          })
        }
      })
  }

  changeLocation = (e) => {
    const id = e.target.id
    if(this.state.location !== id) {
      // this.fetchRouteJSON(id)
      this.setState({
        location: id,
      })
    }
  }

  render() {
    const { routes, location, loadComplete } = this.state
    console.log(routes)
    // console.log(routes.filter(r => r.location === location)[0].routeData)
    return (
      <div>
        <div id='SVGArea'>
          {loadComplete === 3 ? loadLocationSVG(location, routes.filter(r => r.location === location)[0].routeData ) : ''}
        </div>
        <div>
          {<img 
            src={'https://www.coolpix.com.tw/images/loading_s.gif'}
            style={loadComplete === 3 ? {display: 'none'} : {display: 'block'}}
          />}
          {'如果轉太久，請開啟CORS'}
        </div>
        <div id={'changeLocation'}>
          <div id='manual'>
            <h3>操作說明</h3>
            <h4>列印設定:</h4>
            <p>設定<span>132%, 無邊界</span></p>
            <hr />
            <h4>公車路線檔案: (檔案格式為.csv, 需為utf-8編碼)</h4>
            <p>放置於 <span> src/routeFiles/該區域的資料夾</span></p>
          </div>
          <hr />
          <h4>切換路線 / 列印</h4>
          <button 
            id='ChiaYi' 
            className={location === 'ChiaYi' ? 'location-button active' : 'location-button'}
            onClick={this.changeLocation}
          >
            ChiaYi 嘉義
          </button>
          <button 
            id='Yunlin' 
            className={location === 'Yunlin' ? 'location-button active' : 'location-button'}
            onClick={this.changeLocation}
          >
            Yunlin 雲林
          </button>
          <button 
            id='ChanHua' 
            className={location === 'ChanHua' ? 'location-button active' : 'location-button'}
            onClick={this.changeLocation}
          >
            ChanHua 彰化
          </button>
          <button id='print' onClick={window.print}>
            列印
          </button>
        </div>
      </div>
    );
  }
}




