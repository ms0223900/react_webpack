import React from 'react'
import { Rect, Line } from './SVGComponents'

const removeDupliArr = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr = [...newArr, arr[i]]
    }
  }
  return newArr
}
const mergeTimeByHour = (time) => {
  let hour = '00'
  let newTime = []
  let hourCount = 0
  for (let i = 0; i < time.length; i++) {
    if(hour === time[i][0]) {
      newTime[hourCount] = [...newTime[hourCount], time[i][1]] //hour, min, min...
    } else {
      ++hourCount
      hour = time[i][0]
      newTime[hourCount] = [hour, time[i][1]] //hour, min
    }
  }
  return newTime.slice(1)
}
const merge2Time_ByHour = (times) => {
  let newTime = []
  if(times.length > 1) {
    const allTime = [...times[0], ...times[1]]
    let sortHour = removeDupliArr(allTime.map(t => t = t[0])).sort()
    // console.log(sortHour)
    const time1Hour = times[0].map(t => t = t[0])
    const time2Hour = times[1].map(t => t = t[0])

    for (let i = 0; i < sortHour.length; i++) {
      let index0 = time1Hour.indexOf(sortHour[i])
      let index1 = time2Hour.indexOf(sortHour[i])

      const time1Min = index0 !== -1 ? [...times[0][index0].slice(1)] : ['-']
      const time2Min = index1 !== -1 ? [...times[1][index1].slice(1)] : ['-']

      newTime[i] = [sortHour[i], time1Min, time2Min]
    }
    return newTime
  } else {
    let newTime = times.map(t => t = t.map(arr => arr = [arr[0], arr.slice(1)]))
    return newTime[0]
  }
}
const textAlignCenter = (text, fontWidth, width) => {
  let x = 0
  if(text.length > 5) {
    x = 6
  } else {
    x = (width - text.length * fontWidth) / 2
  }
  return x
}


export const BusSchedule = (props) => {
  const { time } = props
  //string to hour, min
  const timeArr = time.map(t => t.map(time => time = [time.slice(0, 2), time.slice(2)]))
  //merge hour
  const mergedTime = timeArr.map(t => t = mergeTimeByHour(t))
  //merge two time
  const mergedTimeArr = merge2Time_ByHour(mergedTime)

  let mergedTimeObj = []
  for (let i = 0; i < mergedTimeArr.length; i++) {
    mergedTimeObj[i] = {
      id: i,
      time: mergedTimeArr[i]
    }
  }
  console.log(mergedTimeObj)

  return (
    <g>    
      {mergedTimeObj.map(t => (
        <g>
          {t.id % 2 === 1 ? 
            <Rect
              x={0}
              y={150 + t.id * 22}
              width={164}
              height={22}
              className={'schedule-singleTime'}
            /> : ''
          }
          <SingleTime 
            hour={t.time[0]}
            normalMin={ t.time[1].join(' ') }
            holidayMin={t.time.length > 2 ? t.time[2].join(' ') : t.time[1].join(' ')}
            y={150 + 22 * t.id  + 16}
          />
        </g>
      ))}
      {<Line
        x1={37}
        y1={107}
        x2={37}
        y2={107 + (mergedTimeObj.length + 2) * 22}
        className={'schedule-line'}
      />}
      {<Line
        x1={98}
        y1={107}
        x2={98}
        y2={107 + (mergedTimeObj.length + 2) * 22}
        className={'schedule-line'}
      />}
    </g>
  )
}

const SingleTime = (props) => {
  const { hour='00', normalMin='-', holidayMin='-', y=150 } = props
  return (
    <g>
      {/* <Rect
        x={0}
        y={0}
        width={164}
        height={22}
        className={'schedule-singleTime'}  
      /> */}
      <text 
        x={10}
        y={y} 
        className={'schedule-singleTime-text'}
      >
        <tspan>
          {hour}
        </tspan>
        <tspan x={ 37 + textAlignCenter(normalMin, 7.5, 61) }>
          {normalMin}
        </tspan>
        <tspan x={ 98 + textAlignCenter(holidayMin, 7.5, 65) }>
          {holidayMin}
        </tspan>
      </text>
    </g>
    
  )
}