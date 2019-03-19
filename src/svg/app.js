/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import '../../styles/style.scss'

import { SVGPaper } from './SVGPaper'
let count = 0

const routeLocations = ['ChiaYi', 'Yunlin', 'ChanHua']
export const locationButtonArr = [
  { id: 'ChiaYi', buttonText: 'ChiaYi 嘉義',  },
  { id: 'Yunlin', buttonText: 'Yunlin 雲林',  },
  { id: 'ChanHua', buttonText: 'ChanHua 彰化',  },
]
const fetchURLSetting = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain;charset=UTF-8',
  },
}

export const getBusProviderId = (routeJSON, routesInfo) => {
  let providerId = []
  for (let i = 0; i < routeJSON.length; i++) {
    providerId[i] = routesInfo
      .filter(rs => rs.NameZh.trim() === routeJSON[i].number.trim())
      .map(arr => arr = arr.ProviderId)
  }
  return providerId
}
export const getBusProviderInfo = (routeJSON, providerId, providerInfo) => {
  let getProviderInfo = []
  for (let j = 0; j < providerId.length; j++) {
    getProviderInfo[j] = providerId[j]
      .map(id => id = providerInfo
        .filter(pro => pro.Id === id)
        //亂碼問題
        .map(arr => arr = arr.NameZh.replace('鼠?', '公總') + ': ' + arr.telephone))
      .map(info => info = info[0])
    routeJSON[j] = {...routeJSON[j], companyService: getProviderInfo[j]}
  }
  return routeJSON
}

export const LocationButton = ({ id='ChiaYi', location='ChiaYi', buttonText='', onClickFn=function() {} }) => (
  <button 
    id={id} 
    className={location === id ? 'location-button active' : 'location-button'}
    onClick={onClickFn}
  >
    {buttonText}
  </button>
)
export const SvgUI = ({ location='ChiaYi', loadComplete=0, isPreview=true, changeViewModeFn=() => {}, changeLocationFn=() => {},  }) => (
  <Fragment>
    <div style={loadComplete === routeLocations.length ? 
      {display: 'none'} : {display: 'block'}}
    >
    {<img 
      src={'https://www.coolpix.com.tw/images/loading_s.gif'}
    />}
    {'如果轉很久，可能是沒開啟CORS，或是資料太多'}
  </div>
  <div id={'changeLocation'}>
    <div id='manual'>
      <h3>操作說明 </h3>
      <h4>列印設定:</h4>
      <p>設定<span>132%, 無邊界</span></p>
      <hr />
      <h4>公車路線檔案: (檔案格式為.csv, 需為utf-8編碼)</h4>
      <p>放置於 <span> src/routeFiles/該區域的資料夾</span></p>
    </div>
    <hr />
    <h4>切換顯示模式: 預覽(只有10張) / 全部</h4>
    <button
      id='preview'
      onClick={changeViewModeFn}
      className={isPreview ? 'location-button active' : 'location-button'}
    >
      預覽
    </button>
    <button
      id='all'
      onClick={changeViewModeFn}
      className={isPreview ? 'location-button' : 'location-button active'}
    >
      全部(資料量大時 需等待片刻)
    </button>
    <hr />
    <h4>切換路線 / 列印</h4>
    {locationButtonArr.map(LB => (
      <LocationButton 
        key={LB.id}
        id={LB.id}
        location={location}
        buttonText={LB.buttonText}
        onClickFn={changeLocationFn}
      />
    ))}
    <button id='print' onClick={window.print}>
      列印
    </button>
  </div>
</Fragment>
)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      routes: [],
      location: 'ChiaYi',
      loadComplete: 0,
      isPreview: true,
    };
  }

  componentWillMount = () => {
    for (let i = 0; i < routeLocations.length; i++) {
      const routeName = routeLocations[i]
      this.fetchRouteJSON(routeName)
    }
  }
  componentDidMount = () => {
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
              const providerId = getBusProviderId(routeJSON, routesInfo)
              
              fetch('http://ebus.cyhg.gov.tw/cms/api/provider', fetchURLSetting)
                .then(res => res.json())
                .then(providerInfo => {
                  const RouteJSONWithCompanyInfo = getBusProviderInfo(routeJSON, providerId, providerInfo)
                  
                  this.setState({
                    routes: [...this.state.routes, {
                      location: locationName,
                      routeData: RouteJSONWithCompanyInfo,
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
      .catch(err => console.log(err))
  }

  changeLocation = (e) => {
    count = 0
    const id = e.target.id
    if(this.state.location !== id) {
      this.setState({
        location: id,
      })
    }
  }
  changeViewMode = (e) => {
    const mode = e.target.id
    if(this.state.isPreview && mode === 'all') {
      this.setState({
        isPreview: false,
      })
    } else {
      this.setState({
        isPreview: true,
      })
    }
  }

  render() {
    const { routes, location, loadComplete, isPreview } = this.state
    // console.log(routes)
    // console.log(routes.filter(r => r.location === location)[0].routeData)
    return (
      <div>
        <SVGPaper 
          loadCompleteCount={loadComplete} 
          routes={routes}
          isPreview={isPreview}
          location={location}
        />
        <SvgUI 
          location={location}
          loadComplete={loadComplete}
          isPreview={isPreview}
          changeViewModeFn={this.changeViewMode}
          changeLocationFn={this.changeLocation}
        />
      </div>
    );
  }
}




