/* eslint-disable no-unused-vars */
import React, { Children, cloneElement } from 'react'

import { Stop, StopWithEng } from './Stop'
import { Arrow } from './SVGComponents'

const ThemeColor = '#006633'
const ThemeColor_Yunlin = '#497D90'

export const getStopType = (stopTypeNo=1, id=1, endIDs=[]) => {
  const StopTypeNo = stopTypeNo * 1
  if(StopTypeNo === 0) {
    return 'now'
  } else if(endIDs.length > 0) {
    if(endIDs.indexOf(id) === -1) {
      return 'normal'
    } else if(endIDs.indexOf(id) !== -1) {
      return 'end'
    }
  } else {
    if(StopTypeNo === 1) {
      return 'normal'
    } else if(StopTypeNo === -1) {
      return 'passed'
    }
  }
}
export const getBetweenStopDistance = (dir, x, id, lastStops, avgDistance) => (
  dir ? 
  x + (( id % lastStops ) * avgDistance) : 
  x - (( id % lastStops ) * avgDistance)
)

export function Route({ direction='right', route=[], x=100, y=200, width=614, lastStopAmount=0, }) {
  const STOPS = route.length
  const totalLength = STOPS - 1
  const avgDistance = width / totalLength
  let dir = (direction === 'right' ? true : false)

  return (
    <g>
      <Arrow 
        x={dir ? x + 18 : x - 18} 
        y={y}
        rotate={ dir ? '0' : '180, 6, 6' }
        fill={ThemeColor} />
      <path 
        d={`
          M ${x} ${y + 6} 
          l ${ dir ? (totalLength) * avgDistance : -(totalLength) * avgDistance } 0` } 
        stroke={ThemeColor} 
        strokeWidth={3} />
      {
        route.map(ls => {
          return (
            <Stop 
              key={ls.id}
              x={ getBetweenStopDistance(dir, x, ls.id, STOPS, avgDistance) }
              y={ y }
              stopName={ ls.stopName }
              stopType={ getStopType(ls.stopType, ls.id) }
            />
          )
        })
      }
    </g>
  )
}
export function RouteWithEngStops({ direction='right', route=[], x=100, y=200, width=614, lastStopAmount=0, endID=[], UpOrDown='Up' }) {
  const STOPS = route.length
  const STOPSForStop = lastStopAmount !== 0 ? lastStopAmount : STOPS
  const totalLength = STOPS - 1
  const avgDistance = width / totalLength
  let dir = (direction === 'right' ? true : false)
  return (
    <g>
      <path 
        d={`
          M ${x} ${y + 6} 
          l ${ 
            dir ? 
            totalLength * avgDistance : 
            -totalLength * avgDistance } 0` 
          } 
        stroke={ThemeColor_Yunlin} 
        strokeWidth={5} />
      {
        route.map(ls => {
          return (
            <StopWithEng
              key={ls.id}
              x={ getBetweenStopDistance(dir, x, ls.id, STOPSForStop, avgDistance) }
              y={ y }
              stopName={ ls.stopName }
              stopNameEng={ ls.stopNameEng }
              stopType={ getStopType(ls.stopType, ls.id, endID) }
              direction={direction}
              UpOrDown={UpOrDown}
            />
          )
        })
      }
    </g>
  )
}


export const HOCRouteWithEngStops = (RouteComponent, UpOrDown) => class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RouteComponent {...this.props} UpOrDown={UpOrDown}/>
    );
  }
}
export const Route_Yunlin = HOCRouteWithEngStops(RouteWithEngStops, 'Up')
export const Route_ChanHua = HOCRouteWithEngStops(RouteWithEngStops, 'Down')
// <Route>
//   <Stop_WithEng_Up />
// </Route>

// route.map(ls => {
//   return (
//     cloneElement(children, {...props})
//   )



// <Parent>
//   <Ch />
// </Parent>
// function Parent = ({children, ...props}) =>

//   (<p>{children}</p>)


// <p><Ch /></p>