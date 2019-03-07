import React from 'react'

import {  RoundedCorner, LineArrow } from './SVGComponents'
import { Route, Route_Yunlin, Route_ChanHua } from './SingleStopLine'


const ThemeColor = '#006633'
const ThemeColor_Yunlin = '#497D90'

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

const linesArr = (lines) => {
  let arr = []
  for (let i = 1; i < lines; i++) {
    arr = [...arr, i + 1]
  } return arr
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


function genarateRoutes(routeData) {
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
  
  if(lines === 1) {
    return (
      <g style={{ 'fontSize': styles.font['1Line'] }}>
        <Route
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
        <Route
          direction='right' 
          route={routeData.filter(data => data.id < stopsPerLine)} 
          x={drawLineArea.x}
          y={drawLineArea.y}
          width={ drawLineArea.w }
          stops={stopsPerLine}
        />
        {linesArrForMap.map(l => (
          <React.Fragment>
            <RoundedCorner 
              x={ l % 2 === 0 ? drawLineArea.x + drawLineArea.w + 12 : drawLineArea.x }
              y={ drawLineArea.y + (drawLineArea.h / lines) * (l - 2) + 6 }
              h={ l % 2 === 0 ? 20 : -20}
              v={drawLineArea.h / lines * 1}
              r={10}  
              strokeWidth={5}
              stroke={ThemeColor}
            />
            <Route
              direction={l % 2 === 0 ? 'left' : 'right'} 
              route={routeData.filter(
                data => data.id >= stopsPerLine * (l - 1) && data.id < stopsPerLine * l )} 
              x={ l % 2 === 0 ? drawLineArea.x + drawLineArea.w : drawLineArea.x }
              y={ drawLineArea.y + (drawLineArea.h / lines) * (l - 1) }
              stops={ l === lines ? stops - stopsPerLine * (l - 1) : stopsPerLine } //剩下的站
              lastStops={ l === lines ? stopsPerLine : 0 }
            />
          </React.Fragment>  
        ))}
      </g>
    )
  }
}

function genarateRoutes_Yunlin(routeData) {
  const stops = routeData.length
  const lines = Math.round(stops < 10 ? 1 : Math.ceil(stops / 40) + 1) //小於10為一條，大於40則兩條，以此類推
  
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
      '3Line': 14,
      '4Line': 13,
    }
  }
  
  
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
          fontSize={ styles.font[`${lines}Line`] }
          endID={ [0, stops - 1] }
        />
        {linesArrForMap.map(l => (
          <React.Fragment>
            <RoundedCorner 
              x={ l % 2 === 0 ? drawLineArea.x + drawLineArea.w + 12 : drawLineArea.x }
              y={ drawLineArea.y + (drawLineArea.h / lines) * (l - 1) + 6 }
              h={ l % 2 === 0 ? 20 : -20}
              v={drawLineArea.h / lines * 1}
              r={10}  
              strokeWidth={5}
              stroke={ThemeColor_Yunlin}
            />
            <LineArrow 
              x={ l % 2 === 0 ? drawLineArea.x + drawLineArea.w + 12 + 13 : drawLineArea.x - 27}
              y={ drawLineArea.y + (drawLineArea.h / lines) * (l * 2 - 1) / 2 + 6 + 6 }
            />
            <Route_Yunlin
              direction={l % 2 === 0 ? 'left' : 'right'} 
              route={routeData.filter(
                data => data.id >= stopsPerLine * (l - 1) && data.id < stopsPerLine * l )} 
              x={ l % 2 === 0 ? drawLineArea.x + drawLineArea.w : drawLineArea.x }
              y={ drawLineArea.y + (drawLineArea.h / lines) * l }
              width={ drawLineArea.w }
              stops={ l === lines ? stops - stopsPerLine * (l - 1) : stopsPerLine } //剩下的站
              lastStops={ l === lines ? stopsPerLine : 0 }
              fontSize={ styles.font[`${lines}Line`] }
              endID={ [0, routeData.length - 1] }
            />
          </React.Fragment>  
        ))}
      </g>
    )
}

function genarateRoutes_ChanHua(routeData) {
  const stops = routeData.length
  const lines = Math.round(stops < 10 ? 1 : Math.ceil(routeData.length / 40) + 1)
  const stopsPerLine = Math.ceil(stops / lines)
  const drawLineArea = {
    x: 180,
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
  
  const linesArrForMap = linesArr(lines)
  return (
    <g style={{ 'fontSize': styles.font[`${lines}Line`] }}>
      <Route_ChanHua
        direction='right' 
        route={routeData.filter(data => data.id < stopsPerLine)} 
        x={drawLineArea.x}
        y={ lines === 1 ? drawLineArea.y + drawLineArea.h / 2 - 100 :drawLineArea.y }
        width={ drawLineArea.w }
        stops={stopsPerLine}
        endID={ [0, stops - 1] }
      />
      {linesArrForMap.map(l => (
        <React.Fragment>
          <RoundedCorner 
            x={ l % 2 === 0 ? drawLineArea.x + drawLineArea.w + 12 : drawLineArea.x }
            y={ drawLineArea.y + (drawLineArea.h / lines) * (l - 2) + 6 }
            h={ l % 2 === 0 ? 20 : -20}
            v={drawLineArea.h / lines * 1}
            r={10}  
            strokeWidth={5}
            stroke={ThemeColor}
          />
          <Route_ChanHua
            direction={l % 2 === 0 ? 'left' : 'right'} 
            route={routeData.filter(
              data => data.id >= stopsPerLine * (l - 1) && data.id < stopsPerLine * l )} 
            x={ l % 2 === 0 ? drawLineArea.x + drawLineArea.w : drawLineArea.x }
            y={ drawLineArea.y + (drawLineArea.h / lines) * (l - 1) }
            stops={ l === lines ? stops - stopsPerLine * (l - 1) : stopsPerLine } //剩下的站
            lastStops={ l === lines ? stopsPerLine : 0 }
            endID={ [0, stops - 1] }
          />
        </React.Fragment>  
      ))}
    </g>
  )
}