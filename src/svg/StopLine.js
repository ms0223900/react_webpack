import React from 'react'

import {  RoundedCorner } from './SVGComponents'
import { Route, Route_Yunlin, Route_ChanHua } from './SingleStopLine'
import { THEME, styles } from '../../config'

const { defaultTheme, YunlinChanHuaTheme } = THEME
const { defaultStyle, YunlinChanHua, ChanHua } = styles.routes

const lineToArr = (lines) => {
  let arr = []
  for (let i = 0; i < lines; i++) {
    arr = [...arr, i + 1]
  } return arr
}
export const sepLines = (stops) => (stops < 10 ? 1 : Math.ceil(stops / 40) + 1)
export const sepRouteData = (routeData=[{id: 0}], stopsPerLine=10, l=1) => (
  routeData.filter(
    data => data.id >= stopsPerLine * (l - 1) && data.id < stopsPerLine * l )
)
export const setTextOfLinesY = (lines=1, y=100, h=100, l=1, UpOrDown='Up') => 
  UpOrDown === 'Up' ?
  (y + (h / lines) * l) :
  (lines === 1 ? (y + h / 2 - 100) : (y + (h / lines) * (l - 1)))



function genarateRoutes(routeData) {
  const stops = routeData.length
  const lines = sepLines(stops)
  const stopsPerLine = Math.ceil(stops / lines)
  const { x, y, w, h } = defaultStyle.drawLineArea
  
  if(lines === 1) {
    return (
      <g style={{ 'fontSize': defaultStyle.fontSize['1Line'] }}>
        <Route
          direction='right' 
          route={routeData} 
          x={x}
          y={y + h / (lines + 1) - 100}
          stops={stopsPerLine}
          fontSize={ defaultStyle.fontSize['1Line'] }
          endID={ [0, stops - 1] }
        />
      </g>
    )
  } else {
    const linesArrForMap = lineToArr(lines)
    return (
      <g style={{ 'fontSize': defaultStyle.fontSize[`${lines}Line`] }}>
        <Route
          direction='right' 
          route={routeData.filter(data => data.id < stopsPerLine)} 
          x={x}
          y={y}
          width={ w }
          stops={stopsPerLine}
        />
        {linesArrForMap.map(l => (
          <React.Fragment>
            <RouteRoundedCorner l={l} x={x} y={y} w={w} h={h} lines={lines} 
            strokeTheme={defaultTheme} strokeWidth={3} txtUpOrDown={'Down'}
          />
          <Route
            direction={l % 2 === 0 ? 'left' : 'right'} 
            route={routeData.filter(
              data => data.id >= stopsPerLine * (l - 1) && data.id < stopsPerLine * l )} 
            x={ l % 2 === 0 ? x + w : x }
            y={ y + (h / lines) * (l - 1) }
            stops={ l === lines ? stops - stopsPerLine * (l - 1) : stopsPerLine } //剩下的站
            lastStops={ l === lines ? stopsPerLine : 0 }
          />
        </React.Fragment>  
        ))}
      </g>
    )
  }
}

// function genarateRoutes_Yunlin(routeData) {
//   const stops = routeData.length
//   const lines = sepLines(stops) //小於10為一條，大於40則兩條，以此類推
  
//   const stopsPerLine = Math.ceil(stops / lines)
//   const { x, y, w, h } = YunlinChanHua.drawLineArea
//     const linesArrForMap = lineToArr(lines)
//     return (
//       <g style={{ 'fontSize': YunlinChanHua.fontSize[`${lines}Line`] }}>
//         <Route_Yunlin
//           direction='right' 
//           route={routeData.filter(data => data.id < stopsPerLine)} 
//           x={x}
//           y={y + h / ((lines) * 1)}
//           width={ w }
//           stops={stopsPerLine}   
//           endID={ [0, stops - 1] }
//         />
//         {linesArrForMap.map(l => (
//           <React.Fragment>
//             <RouteRoundedCorner l={l} x={x} y={y} w={w} h={h} lines={lines} 
//             strokeWidth={5} txtUpOrDown={'Up'}
//           />
//             <LineArrow 
//               x={ l % 2 === 0 ? x + w + 12 + 13 : x - 27}
//               y={ y + (h / lines) * (l * 2 - 1) / 2 + 6 + 6 }
//             />
//             <Route_Yunlin
//               direction={l % 2 === 0 ? 'left' : 'right'} 
//               route={routeData.filter(
//                 data => data.id >= stopsPerLine * (l - 1) && data.id < stopsPerLine * l )} 
//               x={ l % 2 === 0 ? x + w : x }
//               y={ y + (h / lines) * l }
//               width={ w }
//               lastStopAmount={ l === lines ? stopsPerLine : 0 } //之前的一條站
//               endID={ [0, routeData.length - 1] }
//             />
//           </React.Fragment>  
//         ))}
//       </g>
//     )
// }

// function genarateRoutes_ChanHua(routeData) {
//   const stops = routeData.length
//   const lines = Math.round(stops < 10 ? 1 : Math.ceil(routeData.length / 40) + 1)
//   const stopsPerLine = Math.ceil(stops / lines)
//   const { x, y, w, h } = ChanHua.drawLineArea
  
//   const linesArrForMap = lineToArr(lines)
//   return (
//     <g style={{ 'fontSize': YunlinChanHua.fontSize[`${lines}Line`] }}>
//       <Route_ChanHua
//         direction='right' 
//         route={routeData.filter(data => data.id < stopsPerLine)} 
//         x={x}
//         y={ setTextOfLinesY(lines, y, h) }
//         width={ w }
//         stops={stopsPerLine}
//         endID={ [0, stops - 1] }
//       />
//       {linesArrForMap.map(l => (
//         <React.Fragment>
//           <RouteRoundedCorner l={l} x={x} y={y} w={w} h={h} lines={lines} 
//             strokeTheme={YunlinChanHuaTheme} strokeWidth={5} txtUpOrDown={'Down'}
//           />
//           <Route_ChanHua
//             direction={l % 2 === 0 ? 'left' : 'right'} 
//             route={routeData.filter(
//               data => data.id >= stopsPerLine * (l - 1) && data.id < stopsPerLine * l )} 
//             x={ l % 2 === 0 ? x + w : x }
//             y={ setTextOfLinesY(lines, y, h, l) } 
//             width={ w }
//             lastStopAmount={ l === lines ? stopsPerLine : 0 } //之前的一條站
//             endID={ [0, stops - 1] }
//           />
//         </React.Fragment>  
//       ))}
//     </g>
//   )
// }
export const RouteRoundedCorner = ({l, x, y, w, h, lines, strokeWidth, strokeTheme='#000', txtUpOrDown='Up'}) => (
  <RoundedCorner 
    x={ l % 2 === 0 ? x + w + 12 : x }
    y={ txtUpOrDown === 'Up' ?  y + (h / lines) * (l - 1) + 6 : y + (h / lines) * (l - 2) + 6 }
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
          <React.Fragment>
            {l > 1 ? (
              <RouteRoundedCorner l={l} x={x} y={y} w={w} h={h} lines={lines} 
                strokeTheme={YunlinChanHuaTheme} strokeWidth={5} txtUpOrDown={txtUpOrDown}
              />
            ) : ''}
            <RouteComponent
              direction={l % 2 === 0 ? 'left' : 'right'} 
              route={sepRouteData(routeData, stopsPerLine, l) }
              x={ l % 2 === 0 ? x + w : x }
              y={ setTextOfLinesY(lines, y, h, l, txtUpOrDown) } 
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
function genarateRoutes_ChanHua(routeData) {
  return <MappedRoutesChanHua routeData={routeData}/>
}
function genarateRoutes_Yunlin(routeData) {
  return <MappedRoutesChanHua routeData={routeData}/>
}  


const getRouteByLocation = (location, routeData=[]) => {
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
    const { routeData=[], location='Yunlin' } = this.props;
    return (
      <g id={'route1'}>
        { getRouteByLocation(location, routeData) }
      </g>
    )
  }
}
// const HOCLocationRoute = (RouteComponent, )