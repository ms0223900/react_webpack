import React from 'react'

import {  RoundedCorner } from './SVGComponents'
import { Route, Route_Yunlin, Route_ChanHua } from './SingleStopLine'
import { styles } from '../../config'

const { defaultStyle, YunlinChanHua, ChanHua } = styles.routes

export const lineToArr = (lines) => {
  let arr = []
  for (let i = 0; i < lines; i++) {
    arr = [...arr, i + 1]
  } return arr
}
export const sepLines = (stops) => (stops < 10 ? 1 : Math.ceil(stops / 40) + 1)
export const sepRouteData = (routeData=[], stopsPerLine=10, l=1) => ( routeData.slice(stopsPerLine * (l - 1), stopsPerLine * l) )
export const setPosOfLinesY = (lines=1, y=100, h=100, l=1, UpOrDown='Up') => (
  UpOrDown === 'Up' ?
  (y + (h / lines) * l) :
  (lines === 1 ? (y + h / 2 - 100) : (y + (h / lines) * (l - 1)))
)

export const RouteRoundedCorner = ({l, x, y, w, h, lines, strokeWidth, strokeTheme='#000', txtUpOrDown='Up'}) => (
  <RoundedCorner 
    x={ l % 2 === 0 ? x + w + 12 : x }
    y={ txtUpOrDown === 'Up' ? 
      y + (h / lines) * (l - 1) + 6 : 
      y + (h / lines) * (l - 2) + 6 
    }
    h={ l % 2 === 0 ? 20 : -20 }
    v={h / lines * 1}
    r={10}  
    strokeWidth={strokeWidth}
    stroke={strokeTheme}
  />
)

export const HOCMappedRoute = (RouteComponent, location, txtUpOrDown='Up') => class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { routeData=[] } = this.props
    const stops = routeData.length
    const lines = sepLines(stops)
    const stopsPerLine = Math.ceil(stops / lines)
    const { x, y, w, h } = location.drawLineArea
    const linesArrForMap = lineToArr(lines) 
     
    return (
      <g style={{ 'fontSize': location.fontSize[`${lines}Line`] }}>
        {linesArrForMap.map(l => (
          <React.Fragment key={l}>
            {l > 1 ? (
              <RouteRoundedCorner l={l} x={x} y={y} w={w} h={h} lines={lines} 
                strokeTheme={location.THEME} strokeWidth={location.lineWidth} txtUpOrDown={txtUpOrDown}
              />
            ) : ''}
            <RouteComponent
              direction={l % 2 === 0 ? 'left' : 'right'} 
              route={sepRouteData(routeData, stopsPerLine, l) }
              x={ l % 2 === 0 ? x + w : x }
              y={ setPosOfLinesY(lines, y, h, l, txtUpOrDown) } 
              width={ w }
              lastStopAmount={ l === lines ? stopsPerLine : 0 } //之前的一條站
              endID={ [0, stops - 1] }
            />
          </React.Fragment>  
        ))}
      </g>
    )
  }
}

export const MappedRoutesChanHua = HOCMappedRoute(Route_ChanHua, ChanHua, 'Down')
export const MappedRoutesYunlin = HOCMappedRoute(Route_Yunlin, YunlinChanHua, 'Up')
export const MappedRoutesDefault = HOCMappedRoute(Route, defaultStyle, 'Down')

export function genarateRoutes_ChanHua(routeData) {
  return <MappedRoutesChanHua routeData={routeData}/>
}
export function genarateRoutes_Yunlin(routeData) {
  return <MappedRoutesYunlin routeData={routeData}/>
}  
export function genarateRoutes(routeData) {
  return <MappedRoutesDefault routeData={routeData}/>
}

export const getRouteByLocation = (location, routeData=[]) => {
  switch (location) {
    case 'ChiaYi':
      return genarateRoutes(routeData) 
    case 'Yunlin':
      return genarateRoutes_Yunlin(routeData) 
    case 'ChanHua':
      return genarateRoutes_ChanHua(routeData)
    default:
      return genarateRoutes(routeData) 
  }
}


export default class StopLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { routeData=[], 
      location='Yunlin', 
      generateRouteFn=getRouteByLocation } = this.props;
    return (
      <g id={'route1'}>
        { generateRouteFn(location, routeData) }
      </g>
    )
  }
}
// const HOCLocationRoute = (RouteComponent, )