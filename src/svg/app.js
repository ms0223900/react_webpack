
import React from 'react'
import '../../styles/style.scss'

// import { Convert_Yunlin } from './ConvertCSV'
import { SVGPaper_ChiaYi, SVGPaper_Yunlin } from './SVGPaper'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      routes: [],
      location: 'ChiaYi',
    };
  }

  componentWillMount = () => {
    // const routePath = '../src/routeFiles/routeDataAll.txt'
    // const routePath = 'routeDataAll.txt'
    // fetch(routePath)
    //   .then(res => res.text())
    //   .then(txt => { 
    //     const fetchRoutes = Convert_ChiaYi(txt)
    //     this.setState({
    //       routes: fetchRoutes,
    //     })
    //   })
    fetch(`allRoutes_${this.state.location}.json`)
      .then(res => res.json())
      .then(txt => { 
        console.log(txt)
        // console.log(Convert_Yunlin(txt))
        this.setState({
          routes: txt,
        })
      })
      
  }
  componentDidMount = () => {
    console.log('load success!')
  }
  
  render() {
    const { routes, location } = this.state;
    return (
      <React.Fragment>
        <div>
          {location === 'ChiaYi' ? routes.map(r => (
            <SVGPaper_ChiaYi routes={r} location={location} />
          )): ''}
          {location === 'Yunlin' ? routes.map(r => (
            <SVGPaper_Yunlin routes={r} location={location} />
          )): ''}
        </div>
        <div>
          路線資料載入中...
        </div>
      </React.Fragment>
    );
  }
}



