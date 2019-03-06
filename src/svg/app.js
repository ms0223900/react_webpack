import React from 'react'
import '../../styles/style.scss'

import { SVGPaper_ChiaYi, SVGPaper_Yunlin } from './SVGPaper'

// const $class = (className) => document.getElementsByClassName(className)
// const $id = (id) => document.getElementById(id)
// const $all = (all) => document.querySelectorAll(all)

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

  loadingCount = () => {
    console.log('loading count')
    this.setState({
      loading: this.state.loading + 1,
    })
  }

  render() {
    const { routes, location } = this.state;
    return (
      <React.Fragment>
        <div>
          {location === 'ChiaYi' ? routes.map(r => (
            <SVGPaper_ChiaYi 
              routes={r} 
              location={location} 
              loadingStatus={console.log('loaddddd')}
            />
          )): ''}
          {location === 'Yunlin' ? routes.map(r => (
            <SVGPaper_Yunlin 
              routes={r} 
              location={location} 
              
            />
          )): ''}
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

// if($class('action-button').length > 0) {
//   console.log('actionBTN', $class('action-button').length)
//   $all('#button-strip .action-button')[0].addEventListener('click', () => {
//     $id('changeLocation').style.display = 'block'
//     console.log('clicked')
//   })
  
//   $all('#button-strip .cancel-button')[0].addEventListener('click', () => {
//     $id('changeLocation').style.display = 'block'
//     console.log('clicked')
//   })
// }



