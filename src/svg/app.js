import React from 'react'
import '../../styles/style.scss'

import { SVGPaper_ChiaYi, SVGPaper_Yunlin, SVGPaper_ChanHua } from './SVGPaper'

// const $class = (className) => document.getElementsByClassName(className)
// const $id = (id) => document.getElementById(id)
// const $all = (all) => document.querySelectorAll(all)

const loadLocationSVG = (location, routes) => {
  routes.map(r => {
    switch (location) {
      case 'ChiaYi':
        return <SVGPaper_ChiaYi routes={r} location={location} />
      case 'Yunlin':
        return <SVGPaper_Yunlin routes={r} location={location} />
      case 'ChanHua':
        return <SVGPaper_ChanHua routes={r} location={location} />

      default:
        return ''
    }
  })
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      routes: [],
      location: 'ChiaYi',
      loading: 0,
    };
  }

  componentWillMount = () => {
    fetch(`allRoutes_${this.state.location}.json`)
      .then(res => res.json())
      .then(json => { 
        console.log(json)
        this.setState({
          routes: json,
        })
      })
  }
  componentDidMount = () => {
    console.log('load success!')
  }

  changeLocation = (e) => {
    const id = e.target.id
    if(this.state.location !== id) {
      fetch(`allRoutes_${id}.json`)
      .then(res => res.json())
      .then(json => { 
        console.log(json)
        this.setState({
          routes: json,
          location: id,
        })
      })
    }
  }

  render() {
    const { routes, location } = this.state;
    return (
      <React.Fragment>
        <div>
          {loadLocationSVG(location, routes)}
        </div>
        <div>
          路線資料載入中...
          {this.state.loading}
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
          <button id='print' onClick={window.print}>
            列印
          </button>
        </div>
      </React.Fragment>
    );
  }
}




