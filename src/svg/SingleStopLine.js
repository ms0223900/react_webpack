/* eslint-disable no-unused-vars */
import React, { Children, cloneElement } from 'react'

import { Stop, StopWithEng } from './Stop'
import { Arrow } from './SVGComponents'
import { THEME } from '../../config'

const { defaultStyle, YunlinChanHua } = THEME

export const getStopType = (stopTypeNo=1, id=1, endIDs=[]) => {
  console.log(endIDs)
  switch (stopTypeNo * 1) {
    case -1:
      return endIDs.length > 0 ? 
        (endIDs.indexOf(id) !== -1 ? 'end' : 'normal') : 
        'passed'
    case 1:
      return endIDs.length > 0 && endIDs.indexOf(id) !== -1 ?
      'end' : 'normal'
    case 0:
      return 'now'
    default:
      return 'normal'
  }
}
export const getBetweenStopDistance = (dir, x, id, lastStops, avgDistance) => (
  dir ? 
  x + (( id % lastStops ) * avgDistance) : 
  x - (( id % lastStops ) * avgDistance)
)
export function Route({ direction='right', route=[], x=100, y=200, width=614, lastStopAmount=0, endID=[], UpOrDown='Up', StopComponentType='' }) {
  const STOPS = route.length
  const totalLength = STOPS - 1
  const STOPSForStop = lastStopAmount !== 0 ? lastStopAmount : STOPS
  const avgDistance = width / totalLength
  let dir = (direction === 'right' ? true : false)
  const StopComponent = StopComponentType === 'Stop' ? Stop : StopWithEng

  return (
    <g>
      <Arrow 
        x={dir ? x + 18 : x - 18} 
        y={y}
        rotate={ dir ? '0' : '180, 6, 6' }
        fill={defaultStyle} />
      <path 
        d={`
          M ${x} ${y + 6} 
          l ${ dir ? (totalLength) * avgDistance : -(totalLength) * avgDistance } 0` } 
        stroke={defaultStyle} 
        strokeWidth={3} />
      {
        route.map(ls => {
          return (
            <StopComponent 
              key={ls.id}
              x={ getBetweenStopDistance(dir, x, ls.id, STOPSForStop, avgDistance) }
              y={ y }
              stopName={ ls.stopName }
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
      <RouteComponent {...this.props} StopComponentType={'StopWithEng'} UpOrDown={UpOrDown} />
    );
  }
}
export const Route_ChiaYi = (props) => <Route StopComponentType={'Stop'} {...props} />
export const Route_Yunlin = HOCRouteWithEngStops(Route, 'Up')
export const Route_ChanHua = HOCRouteWithEngStops(Route, 'Down')
