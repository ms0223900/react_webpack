import React from 'react'

import { Arrow, RoundedCorner } from './SVGComponents'
// import { Arrow,  } from './SVGComponents'
import { Stop, Stop_WithEng } from './Stop'

const ThemeColor = '#006633'
const ThemeColor_Yunlin = '#497D90'

const GetRouteByLocation = ({ location, routeData=[] }) => {
  switch (location) {
    case 'ChiaYi':
      return (<GenarateRoutes routeData={routeData} />)
    case 'Yunlin':
      return (<GenarateRoutes_Yunlin routeData={routeData} />)
    default:
      return (<GenarateRoutes routeData={routeData} />)
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
        <GetRouteByLocation 
          routeData={routeData} 
          location={location} 
        />
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
        stroke={ThemeColor_Yunlin} 
        strokeWidth={3} />
      {
        route.map(ls => {
          console.log(ls.stopType * 1)
          return (
            <Stop 
            x={ dir ? x + (( ls.id % lastStops ) * avgDistance) : x - (( ls.id % lastStops ) * avgDistance) }
            y={ y }
            stopName={ ls.stopName }
            stopType={ ls.stopType * 1 === 1 ? ('normal') : (ls.stopType * 1 === -1 ? 'passed' : 'now') }
          />
          )
        })
      }
    </g>
  )
}

function Route_Yunlin({ direction='right', route=[], x=100, y=200, stops=16, lastStops=0, width=614, fontSize, endID=[] }) {
  const avgDistance = (width / (stops - 1))
  let dir = (direction === 'right' ? true : false)
  const stopType = (stopTypeNo, id) => {
    if(stopTypeNo * 1 === 1 && endID.indexOf(id) === -1) {
      return 'normal'
    } else if(stopTypeNo * 1 === 0) {
      return 'now'
    } else if(endID.indexOf(id) !== -1) {
      return 'end'
    }
  }

  lastStops = lastStops === 0 ? stops : lastStops

  return (
    <g>
      <path 
        d={`
          M ${x} ${y + 6} 
          l ${ dir ? (route.length - 1) * avgDistance : -(route.length - 1) * avgDistance } 0` } 
        stroke={ThemeColor_Yunlin} 
        strokeWidth={3} />
      {
        route.map(ls => {
          console.log(ls.stopType * 1)
          return (
            <Stop_WithEng 
              x={ dir ? x + (( ls.id % lastStops ) * avgDistance) : x - (( ls.id % lastStops ) * avgDistance) }
              y={ y }
              stopName={ ls.stopName }
              stopNameEng={ ls.stopNameEng }
              stopType={ stopType(ls.stopType, ls.id) }
              fontSize={ fontSize }
          />
          )
        })
      }
    </g>
  )
}


function GenarateRoutes(props) {
  const { routeData } = props
  const stops = routeData.length
  const lines = Math.round(stops < 10 ? 1 : Math.ceil(routeData.length / 40) + 1)
  const stopsPerLine = Math.ceil(stops / lines)
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
        <g style={{ 'fontSize': styles.font['2Line'] }} transform={'translate(0, 40)'} >
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
            stroke={ThemeColor}
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
            stroke={ThemeColor}
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
            stroke={ThemeColor}
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
            stroke={ThemeColor}
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
            stroke={ThemeColor}
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
            stroke={ThemeColor}
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

// function GenarateRoutes_Yunlin(props) {
//   const { routeData } = props
//   console.log(routeData.length - 1)
//   const stops = routeData.length
//   const lines = Math.round(stops < 10 ? 1 : Math.ceil(routeData.length / 40) + 1)
//   const stopsPerLine = Math.ceil(stops / lines)
//   const drawLineArea = {
//     x: 185,
//     y: 95,
//     w: 604,
//     h: 420,
//   }
//   const styles = {
//     font: {
//       '1Line': 22,
//       '2Line': 17,
//       '3Line': 15,
//       '4Line': 14,
//     }
//   }
  



//   switch (lines) {
//     case 1:
//       return (
//         <g style={{ 'fontSize': styles.font['1Line'] }}>
//           <Route_Yunlin
//             direction='right' 
//             route={routeData} 
//             x={drawLineArea.x}
//             y={drawLineArea.y + drawLineArea.h / (lines + 1) - 100}
//             stops={stopsPerLine}
//             fontSize={ styles.font['1Line'] }
//           />
//         </g>
//       );
    
//     case 2:
//       return (
//         <g style={{ 'fontSize': styles.font['2Line'] }} transform={'translate(0, 0)'} >
//           <Route_Yunlin
//             direction='right' 
//             route={routeData.filter(data => data.id < stopsPerLine)} 
//             x={drawLineArea.x}
//             y={drawLineArea.y + drawLineArea.h / ((lines) * 1)}
//             width={ drawLineArea.w }
//             stops={stopsPerLine}
//             fontSize={ styles.font['2Line'] }
//             endID={ [0, routeData.length - 1] }
//           />
//           <RoundedCorner 
//             x={ drawLineArea.x + drawLineArea.w + 12 }
//             y={drawLineArea.y + drawLineArea.h / ((lines) * 1) + 6}
//             h={20}
//             v={drawLineArea.h / (lines * 1)}
//             r={10}  
//             strokeWidth={3}
//             stroke={ThemeColor_Yunlin}
//           />
//           <Route_Yunlin
//             direction='left' 
//             route={routeData.filter(data => data.id >= stopsPerLine)} 
//             x={ drawLineArea.x + drawLineArea.w }
//             y={drawLineArea.y + drawLineArea.h / ((lines) * 1) * 2}
//             width={ drawLineArea.w }
//             stops={stops - stopsPerLine} //剩下的站
//             lastStops={stopsPerLine}
//             fontSize={ styles.font['2Line'] }
//             endID={ [0, routeData.length - 1] }
//           />
//         </g>
//       );
    
//     case 3:
//       return (
//         <g style={{ 'fontSize': styles.font['3Line'] }}>
//           <Route_Yunlin
//             direction='right' 
//             route={routeData.filter(data => data.id < stopsPerLine)} 
//             x={drawLineArea.x}
//             y={drawLineArea.y + (drawLineArea.h / lines) * 1 }
//             width={ drawLineArea.w }
//             stops={stopsPerLine}
//             fontSize={ styles.font['3Line'] }
//           />
//           <RoundedCorner 
//             x={ drawLineArea.x + drawLineArea.w + 12 }
//             y={drawLineArea.y + (drawLineArea.h / lines) * 1 + 6}
//             h={20}
//             v={drawLineArea.h / (lines * 1)}
//             r={10}  
//             stroke={ThemeColor_Yunlin}
//           />
//           <Route_Yunlin
//             direction='left' 
//             route={
//               routeData.filter(data => data.id >= stopsPerLine && data.id < stopsPerLine * 2)} 
//             x={ drawLineArea.x + drawLineArea.w }
//             y={ drawLineArea.y + (drawLineArea.h / lines) * 2 }
//             width={ drawLineArea.w }
//             stops={stopsPerLine}
//             fontSize={ styles.font['3Line'] }
//           />
//           <RoundedCorner 
//             x={ drawLineArea.x }
//             y={drawLineArea.y + (drawLineArea.h / lines) * 2 + 6}
//             h={-20}
//             v={drawLineArea.h / (lines * 1)}
//             r={10} 
//             stroke={ThemeColor_Yunlin}
//           />
//           <Route_Yunlin
//             direction='right'
//             route={routeData.filter(data => data.id >= stopsPerLine * 2)} 
//             x={ drawLineArea.x }
//             y={drawLineArea.y + (drawLineArea.h / lines) * 3}
//             width={ drawLineArea.w }
//             stops={stops - stopsPerLine * 2} //剩下的站
//             lastStops={stopsPerLine}
//             fontSize={ styles.font['3Line'] }
//           />
//         </g>
//       )
//       case 4:
//       return (
//         <g style={{ 'fontSize': styles.font['4Line'] }}>
//           <Route_Yunlin
//             direction='right' 
//             route={routeData.filter(data => data.id < stopsPerLine)} 
//             x={drawLineArea.x}
//             y={drawLineArea.y + (drawLineArea.h / lines) * 1 }
//             width={ drawLineArea.w }
//             stops={stopsPerLine}
//             fontSize={ styles.font['4Line'] }
//           />
//           <RoundedCorner 
//             x={ drawLineArea.x + drawLineArea.w + 12 }
//             y={drawLineArea.y + (drawLineArea.h / lines) * 1 + 6}
//             h={20}
//             v={drawLineArea.h / (lines * 1)}
//             r={10}  
//             stroke={ThemeColor_Yunlin}
//           />
//           <Route_Yunlin
//             direction='left' 
//             route={
//               routeData.filter(data => data.id >= stopsPerLine && data.id < stopsPerLine * 2)} 
//             x={ drawLineArea.x + drawLineArea.w }
//             y={drawLineArea.y + (drawLineArea.h / lines) * 2}
//             width={ drawLineArea.w }
//             stops={stopsPerLine}
//             fontSize={ styles.font['4Line'] }
//           />
//           <RoundedCorner 
//             x={ drawLineArea.x }
//             y={drawLineArea.y + (drawLineArea.h / lines) * 2 + 6}
//             h={-20}
//             v={drawLineArea.h / (lines * 1)}
//             r={10} 
//             stroke={ThemeColor_Yunlin}
//           />
//           <Route_Yunlin
//             direction='right'
//             route={routeData.filter(data => data.id >= stopsPerLine * 2 && data.id < stopsPerLine * 3)} 
//             x={ drawLineArea.x }
//             y={ drawLineArea.y + (drawLineArea.h / lines) * 3 }
//             width={ drawLineArea.w }
//             stops={stopsPerLine}
//             fontSize={ styles.font['4Line'] }
//           />
//           <RoundedCorner 
//             x={ drawLineArea.x + drawLineArea.w + 12 }
//             y={ drawLineArea.y + (drawLineArea.h / lines) * 3 + 6 }
//             h={20}
//             v={drawLineArea.h / (lines * 1)}
//             r={10} 
//             stroke={ThemeColor_Yunlin}
//           />
//           <Route_Yunlin
//             direction='left'
//             route={routeData.filter(data => data.id >= stopsPerLine * 3)} 
//             x={ drawLineArea.x + drawLineArea.w }
//             y={ drawLineArea.y + (drawLineArea.h / lines) * 4 }
//             width={ drawLineArea.w }
//             stops={stops - stopsPerLine * 3} //剩下的站
//             lastStops={stopsPerLine}
//             fontSize={ styles.font['4Line'] }
//           />
//         </g>
//       )
//     default:
//       return (
//         <g></g>
//       )
//       ;
//   }
// }


function GenarateRoutes_Yunlin(props) {
  const { routeData } = props
  const stops = routeData.length
  const lines = Math.round(stops < 10 ? 1 : Math.ceil(stops / 40) + 1)
  const linesArr = (lines) => {
    let arr = []
    for (let i = 1; i < lines; i++) {
      arr = [...arr, i + 1]
    } return arr
  }
  const stopsPerLine = Math.ceil(stops / lines)
  const drawLineArea = {
    x: 185,
    y: 95,
    w: 604,
    h: 420,
  }
  const styles = {
    font: {
      '1Line': 22,
      '2Line': 17,
      '3Line': 15,
      '4Line': 14,
    }
  }
  
  if(lines === 1) {
    return (
      <g style={{ 'fontSize': styles.font['1Line'] }}>
        <Route_Yunlin
          direction='right' 
          route={routeData} 
          x={drawLineArea.x}
          y={drawLineArea.y + drawLineArea.h / (lines + 1) - 100}
          stops={stopsPerLine}
          fontSize={ styles.font['1Line'] }
          endID={ [0, stops - 1] }
        />
      </g>
    )
  } else {
    const linesArrForMap = linesArr(lines)
    return (
      <g style={{ 'fontSize': styles.font[`${lines}Line`] }}>
        <Route_Yunlin
          direction='right' 
          route={routeData.filter(data => data.id < stopsPerLine)} 
          x={drawLineArea.x}
          y={drawLineArea.y + drawLineArea.h / ((lines) * 1)}
          width={ drawLineArea.w }
          stops={stopsPerLine}
          fontSize={ styles.font['2Line'] }
          endID={ [0, routeData.length - 1] }
        />
        {linesArrForMap.map(l => (
          <React.Fragment>
            <RoundedCorner 
              x={ drawLineArea.x + drawLineArea.w + 12 }
              y={drawLineArea.y + (drawLineArea.h / lines) * (l - 1) + 6}
              h={20}
              v={drawLineArea.h / lines * 1}
              r={10}  
              strokeWidth={3}
              stroke={ThemeColor_Yunlin}
            />
            <Route_Yunlin
              direction={l % 2 === 0 ? 'left' : 'right'} 
              route={routeData.filter(data => data.id >= stopsPerLine * (l - 1))} 
              x={ drawLineArea.x + drawLineArea.w }
              y={drawLineArea.y + (drawLineArea.h / lines) * (l)}
              width={ drawLineArea.w }
              stops={l === lines ? stops - stopsPerLine : stopsPerLine} //剩下的站
              lastStops={stopsPerLine}
              fontSize={ styles.font['2Line'] }
              endID={ [0, routeData.length - 1] }
            />
          </React.Fragment>  
        ))}
      </g>
    )
  }
  


  switch (lines) {
    case 1:
      return (
        
      );
    
    case 2:
      return (
        <g style={{ 'fontSize': styles.font['2Line'] }} transform={'translate(0, 0)'} >
          <Route_Yunlin
            direction='right' 
            route={routeData.filter(data => data.id < stopsPerLine)} 
            x={drawLineArea.x}
            y={drawLineArea.y + drawLineArea.h / ((lines) * 1)}
            width={ drawLineArea.w }
            stops={stopsPerLine}
            fontSize={ styles.font['2Line'] }
            endID={ [0, routeData.length - 1] }
          />
          <RoundedCorner 
            x={ drawLineArea.x + drawLineArea.w + 12 }
            y={drawLineArea.y + drawLineArea.h / ((lines) * 1) + 6}
            h={20}
            v={drawLineArea.h / (lines * 1)}
            r={10}  
            strokeWidth={3}
            stroke={ThemeColor_Yunlin}
          />
          <Route_Yunlin
            direction='left' 
            route={routeData.filter(data => data.id >= stopsPerLine)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={drawLineArea.y + drawLineArea.h / ((lines) * 1) * 2}
            width={ drawLineArea.w }
            stops={stops - stopsPerLine} //剩下的站
            lastStops={stopsPerLine}
            fontSize={ styles.font['2Line'] }
            endID={ [0, routeData.length - 1] }
          />
        </g>
      );
    
    case 3:
      return (
        <g style={{ 'fontSize': styles.font['3Line'] }}>
          <Route_Yunlin
            direction='right' 
            route={routeData.filter(data => data.id < stopsPerLine)} 
            x={drawLineArea.x}
            y={drawLineArea.y + (drawLineArea.h / lines) * 1 }
            width={ drawLineArea.w }
            stops={stopsPerLine}
            fontSize={ styles.font['3Line'] }
          />
          <RoundedCorner 
            x={ drawLineArea.x + drawLineArea.w + 12 }
            y={drawLineArea.y + (drawLineArea.h / lines) * 1 + 6}
            h={20}
            v={drawLineArea.h / (lines * 1)}
            r={10}  
            stroke={ThemeColor_Yunlin}
          />
          <Route_Yunlin
            direction='left' 
            route={
              routeData.filter(data => data.id >= stopsPerLine && data.id < stopsPerLine * 2)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={ drawLineArea.y + (drawLineArea.h / lines) * 2 }
            width={ drawLineArea.w }
            stops={stopsPerLine}
            fontSize={ styles.font['3Line'] }
          />
          <RoundedCorner 
            x={ drawLineArea.x }
            y={drawLineArea.y + (drawLineArea.h / lines) * 2 + 6}
            h={-20}
            v={drawLineArea.h / (lines * 1)}
            r={10} 
            stroke={ThemeColor_Yunlin}
          />
          <Route_Yunlin
            direction='right'
            route={routeData.filter(data => data.id >= stopsPerLine * 2)} 
            x={ drawLineArea.x }
            y={drawLineArea.y + (drawLineArea.h / lines) * 3}
            width={ drawLineArea.w }
            stops={stops - stopsPerLine * 2} //剩下的站
            lastStops={stopsPerLine}
            fontSize={ styles.font['3Line'] }
          />
        </g>
      )
      case 4:
      return (
        <g style={{ 'fontSize': styles.font['4Line'] }}>
          <Route_Yunlin
            direction='right' 
            route={routeData.filter(data => data.id < stopsPerLine)} 
            x={drawLineArea.x}
            y={drawLineArea.y + (drawLineArea.h / lines) * 1 }
            width={ drawLineArea.w }
            stops={stopsPerLine}
            fontSize={ styles.font['4Line'] }
          />
          <RoundedCorner 
            x={ drawLineArea.x + drawLineArea.w + 12 }
            y={drawLineArea.y + (drawLineArea.h / lines) * 1 + 6}
            h={20}
            v={drawLineArea.h / (lines * 1)}
            r={10}  
            stroke={ThemeColor_Yunlin}
          />
          <Route_Yunlin
            direction='left' 
            route={
              routeData.filter(data => data.id >= stopsPerLine && data.id < stopsPerLine * 2)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={drawLineArea.y + (drawLineArea.h / lines) * 2}
            width={ drawLineArea.w }
            stops={stopsPerLine}
            fontSize={ styles.font['4Line'] }
          />
          <RoundedCorner 
            x={ drawLineArea.x }
            y={drawLineArea.y + (drawLineArea.h / lines) * 2 + 6}
            h={-20}
            v={drawLineArea.h / (lines * 1)}
            r={10} 
            stroke={ThemeColor_Yunlin}
          />
          <Route_Yunlin
            direction='right'
            route={routeData.filter(data => data.id >= stopsPerLine * 2 && data.id < stopsPerLine * 3)} 
            x={ drawLineArea.x }
            y={ drawLineArea.y + (drawLineArea.h / lines) * 3 }
            width={ drawLineArea.w }
            stops={stopsPerLine}
            fontSize={ styles.font['4Line'] }
          />
          <RoundedCorner 
            x={ drawLineArea.x + drawLineArea.w + 12 }
            y={ drawLineArea.y + (drawLineArea.h / lines) * 3 + 6 }
            h={20}
            v={drawLineArea.h / (lines * 1)}
            r={10} 
            stroke={ThemeColor_Yunlin}
          />
          <Route_Yunlin
            direction='left'
            route={routeData.filter(data => data.id >= stopsPerLine * 3)} 
            x={ drawLineArea.x + drawLineArea.w }
            y={ drawLineArea.y + (drawLineArea.h / lines) * 4 }
            width={ drawLineArea.w }
            stops={stops - stopsPerLine * 3} //剩下的站
            lastStops={stopsPerLine}
            fontSize={ styles.font['4Line'] }
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