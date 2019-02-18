import React from 'react'

// import { HalfCircle } from './SVGComponents'
import { Arrow, RoundedCorner } from './SVGComponents'
// import { Arrow,  } from './SVGComponents'
import Stop from './Stop'


export default class StopLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { routeData=[] } = this.props;
    // const route1 = []
    // const route2 = []
    // const route3 = []
    
    return (
      <g id={'route1'}>
      {/* { routeData.length > 0 ? RouteToRight(route1): <g /> }
      { routeData.length > 16 ? RouteToLeft(route2): <g /> }
      { routeData.length > 32 ? RouteToRight(route3): <g /> } */}
      <GenarateRoutes routeData={routeData} />
    </g>
    )
  }
}

function RouteToRight({ route=[], x=100, y=200, stops=16 }) {
  const avgDistance = (614 / (stops - 1))
  return (
    <g>
      <Arrow x={x + 18} y={y} />
      <path d={`M ${x} ${y + 6} l ${ (route.length - 1) * avgDistance } 0` } stroke={'#000'} strokeWidth={3} />
      {
        route.map(ls => (
          <Stop 
            x={ x + ls.id * avgDistance }
            y={ y }
            stopName={ ls.stopName }
            stopType={ ls.stopType === '1' ? 'normal' : 'now' }
          />
        ))
      }
    </g>
    
  )
}

function RouteToLeft({ route=[], x=614, y=400, stops=16 }) {
  const avgDistance = (614 / (stops - 1))
  return (
    <g>
      <Arrow 
        x={ x - 18 } 
        y={ y } 
        rotate={ '180, 6, 6' } />
      <path 
        d={`M ${x} ${y + 6} l ${ -(route.length - 1) * avgDistance } 0` } 
        stroke={'#000'} 
        strokeWidth={3} />
      {
        route.map(ls => (
          <Stop 
            x={ x - (( (ls.id - 1) - (stops) ) * avgDistance) } 
            y={ y }
            stopName={ ls.stopName }
            stopType={ ls.stopType === '1' ? 'normal' : 'now' }
          />
        ))
      }
    </g>
  )  
}
function GenarateRoutes(props) {
  const { routeData=[] } = props
  const stops = routeData.length
  // function getSeperateRoute() {
  //   let sepRoute = [routeData.filter(data => data.id < 10), [], [], []]
  //   for(let i = 0; i < stops; i++) {
  //     if(routeData[i].id >= 80) {
  //       sepRoute[3] = [...sepRoute[3], routeData[i]]
  //     } else if(routeData[i].id >= 40) {
  //       sepRoute[2] = [...sepRoute[2], routeData[i]]
  //     } else if(routeData[i].id >= 20) {
  //       sepRoute[1] = [...sepRoute[1], routeData[i]]
  //     }
  //   }
  //   return sepRoute
  // }
  // console.log(getSeperateRoute())


  const drawLineArea = {
    x: 168,
    y: 108,
    w: 614,
    h: 468,
  }
  const styles = {
    font: {
      '1Line': 22,
      '2Line': 18,
      '3Line': 15,
      '4Line': 14,
    }
  }
  const lines = Math.round(stops < 10 ? 1 : Math.ceil(routeData.length / 40) + 1)
  const stopsPerLine = Math.round(stops / lines)

  

  switch (lines) {
    case 1:
      return (
        <g style={{ 'fontSize': styles.font['1Line'] }}>
          <RouteToRight 
            route={routeData} 
            x={drawLineArea.x}
            y={drawLineArea.y + drawLineArea.h / (lines + 1) - 100}
            stops={stopsPerLine}
          />
        </g>
      );
    case 2:
      return (
        <g style={{ 'fontSize': styles.font['2Line'] }}>
          <RouteToRight 
            route={routeData.filter(data => data.id < stopsPerLine)} 
            x={drawLineArea.x}
            y={drawLineArea.y}
            stops={stopsPerLine}
          />
          <RoundedCorner 
            x={ drawLineArea.x + drawLineArea.w + 12 }
            y={drawLineArea.y + 6}
            h={20}
            v={drawLineArea.h / (lines * 1)}
            r={10}  
            strokeWidth={3}
          />
          <RouteToLeft 
            route={routeData.filter(data => data.id >= stopsPerLine)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={drawLineArea.y + drawLineArea.h / (lines * 1)}
            stops={stops - stopsPerLine} //剩下的站
          />
        </g>
      );
    // case 3:
    // case 4:
    default:
      return (
        <g></g>
      )
      ;
  }
}