import React from 'react'

import { Stop, Stop_WithEng } from './Stop'
import { Arrow } from './SVGComponents'

const ThemeColor = '#006633'
const ThemeColor_Yunlin = '#497D90'


export function Route({ direction='right', route=[], x=100, y=200, stops=16, lastStops=0 }) {
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
        stroke={ThemeColor} 
        strokeWidth={5} />
      {
        route.map(ls => {
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

export function Route_Yunlin({ direction='right', route=[], x=100, y=200, stops=16, lastStops=0, width=614, fontSize, endID=[] }) {
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
        strokeWidth={5} />
      {
        route.map(ls => {
          return (
            <Stop_WithEng 
              x={ dir ? x + (( ls.id % lastStops ) * avgDistance) : x - (( ls.id % lastStops ) * avgDistance) }
              y={ y }
              stopName={ ls.stopName }
              stopNameEng={ ls.stopNameEng }
              stopType={ stopType(ls.stopType, ls.id) }
              fontSize={ fontSize }
              direction={direction}
          />
          )
        })
      }
    </g>
  )
}