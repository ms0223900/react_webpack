import React from 'react'

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
    return (
      <g id={'route1'}>
        <GenarateRoutes routeData={routeData} />
      </g>
    )
  }
}

function Route({ direction='right', route=[], x=100, y=200, stops=16, lastStops=0 }) {
  const avgDistance = (614 / (stops - 1))
  let dir = (direction === 'right' ? true : false);
  lastStops = lastStops === 0 ? stops : lastStops

  return (
    <g>
      <Arrow 
        x={dir ? x + 18 : x - 18} 
        y={y}
        rotate={ dir ? '0' : '180, 6, 6' } />
      <path 
        d={`
          M ${x} ${y + 6} 
          l ${ dir ? (route.length - 1) * avgDistance : -(route.length - 1) * avgDistance } 0` } 
        stroke={'#000'} 
        strokeWidth={3} />
      {
        route.map(ls => (
          <Stop 
            x={ dir ? x + (( ls.id % lastStops ) * avgDistance) : x - (( ls.id % lastStops ) * avgDistance) }
            y={ y }
            stopName={ ls.stopName }
            stopType={ ls.stopType === '1' ? ('normal') : (ls.stopType === '-1' ? 'passed' : 'now') }
          />
        ))
      }
    </g>
  )
}
function GenarateRoutes(props) {
  const { routeData } = props
  const stops = routeData.length
  const lines = Math.round(stops < 10 ? 1 : Math.ceil(routeData.length / 40) + 1)
  const stopsPerLine = Math.round(stops / lines)
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
  

  switch (lines) {
    case 1:
      return (
        <g style={{ 'fontSize': styles.font['1Line'] }}>
          <Route
            direction='right' 
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
          <Route
            direction='right' 
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
          <Route
            direction='left' 
            route={routeData.filter(data => data.id >= stopsPerLine)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={drawLineArea.y + drawLineArea.h / (lines * 1)}
            stops={stops - stopsPerLine} //剩下的站
            lastStops={stopsPerLine}
          />
        </g>
      );
    
    case 3:
      return (
        <g style={{ 'fontSize': styles.font['3Line'] }}>
          <Route
            direction='right' 
            route={routeData.filter(data => data.id < stopsPerLine)} 
            x={drawLineArea.x}
            y={drawLineArea.y}
            stops={stopsPerLine}
          />
          <RoundedCorner 
            x={ drawLineArea.x + drawLineArea.w + 12 }
            y={drawLineArea.y + (drawLineArea.h / lines) * 0 + 6}
            h={20}
            v={drawLineArea.h / (lines * 1)}
            r={10}  
          />
          <Route
            direction='left' 
            route={
              routeData.filter(data => data.id >= stopsPerLine && data.id < stopsPerLine * 2)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={drawLineArea.y + drawLineArea.h / (lines * 1)}
            stops={stopsPerLine}
          />
          <RoundedCorner 
            x={ drawLineArea.x }
            y={drawLineArea.y + (drawLineArea.h / lines) * 1 + 6}
            h={-20}
            v={drawLineArea.h / (lines * 1)}
            r={10} 
          />
          <Route
            direction='right'
            route={routeData.filter(data => data.id >= stopsPerLine * 2)} 
            x={ drawLineArea.x }
            y={drawLineArea.y + (drawLineArea.h / lines) * 2}
            stops={stops - stopsPerLine * 2} //剩下的站
            lastStops={stopsPerLine}
          />
        </g>
      )
      case 4:
      return (
        <g style={{ 'fontSize': styles.font['4Line'] }}>
          <Route
            direction='right' 
            route={routeData.filter(data => data.id < stopsPerLine)} 
            x={drawLineArea.x}
            y={drawLineArea.y}
            stops={stopsPerLine}
          />
          <RoundedCorner 
            x={ drawLineArea.x + drawLineArea.w + 12 }
            y={drawLineArea.y + (drawLineArea.h / lines) * 0 + 6}
            h={20}
            v={drawLineArea.h / (lines * 1)}
            r={10}  
          />
          <Route
            direction='left' 
            route={
              routeData.filter(data => data.id >= stopsPerLine && data.id < stopsPerLine * 2)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={drawLineArea.y + drawLineArea.h / (lines * 1)}
            stops={stopsPerLine}
          />
          <RoundedCorner 
            x={ drawLineArea.x }
            y={drawLineArea.y + (drawLineArea.h / lines) * 1 + 6}
            h={-20}
            v={drawLineArea.h / (lines * 1)}
            r={10} 
          />
          <Route
            direction='right'
            route={routeData.filter(data => data.id >= stopsPerLine * 2 && data.id < stopsPerLine * 3)} 
            x={ drawLineArea.x }
            y={ drawLineArea.y + (drawLineArea.h / lines) * 2 }
            stops={stopsPerLine}
          />
          <RoundedCorner 
            x={ drawLineArea.x + drawLineArea.w + 12 }
            y={ drawLineArea.y + (drawLineArea.h / lines) * 2 + 6 }
            h={20}
            v={drawLineArea.h / (lines * 1)}
            r={10} 
          />
          <Route
            direction='left'
            route={routeData.filter(data => data.id >= stopsPerLine * 3)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={ drawLineArea.y + (drawLineArea.h / lines) * 3 }
            stops={stops - stopsPerLine * 3} //剩下的站
            lastStops={stopsPerLine}
          />
        </g>
      )
    default:
      return (
        <g></g>
      )
      ;
  }
}