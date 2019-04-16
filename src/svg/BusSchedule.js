import React from 'react'
import PropTypes from 'prop-types'
import { Rect, Line } from './SVGComponents'
import { genObjArr } from './svgFunctions'
export const sepTimeToHourMin = (timeStr='0011') => {
  const result = [timeStr.slice(0, 2), timeStr.slice(2)]
  if((result[0] * 1) < 25 && (result[1] * 1 < 61) && result[1].length === 2) {
    return result
  } else {
    throw new Error('You have the wrong format of time string!')
  }
}
export const setTimeToHM_multiple = (arr=[[]]) => (
  arr.map(a => a.map(time => time = sepTimeToHourMin(time)))
)
export const removeDupliArr = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr = [...newArr, arr[i]]
    }
  }
  return newArr
}
export const mergeTimeByHour = (time) => {
  let hour = ''
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
export const merge2Time_ByHour = (times=['00', '00']) => {
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
export const textAlignCenter = (text, fontWidth, width) => {
  if(text.length > 5) {
    return 6
  } else {
    return (width - text.length * fontWidth) / 2
  }
}
//


export const SepLine = ({ x=37, length=1 }) => (
  <Line
    x1={x}
    y1={107}
    x2={x}
    y2={107 + (length + 2) * 22}
    className={'schedule-line'}
  />
)
export const SingleTime = (props) => {
  const { hour='00', normalMin='-', holidayMin='-', y=150 } = props
  return (
    <g>
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
export const SingleSchedule = ({ objArr={}, y=0 }) => (
  <g>
    {objArr.id % 2 === 1 ? 
      <Rect
        x={0}
        y={y + objArr.id * 22}
        width={164}
        height={22}
        className={'schedule-singleTime'}
      /> : ''
    }
    <SingleTime 
      hour={objArr.data[0]}
      normalMin={ objArr.data[1].join(' ') }
      holidayMin={objArr.data.length > 2 ? objArr.data[2].join(' ') : objArr.data[1].join(' ')}
      y={y + 22 * objArr.id  + 16}
    />
  </g>
)

export const BusSchedule = ({ time=[], forDemo=false, x=0, y=150 }) => {
  //string to hour, min
  const timeArr = setTimeToHM_multiple(time)
  //merge hour
  const mergedTime = timeArr.map(t => t = mergeTimeByHour(t))
  //merge two time
  const mergedTimeArr = merge2Time_ByHour(mergedTime)
  const mergedTimeObjArr = genObjArr(mergedTimeArr)

  return (
    <g transform={`translate(${x}, ${y})`}>    
      { mergedTimeObjArr.map(t => <SingleSchedule key={t.id} objArr={t} 
        y={y} />) }
        {forDemo ? (
          <g>
            <text x={10} y={y - 3}>時</text>
            <text x={60} y={y - 3}>分</text>
            <text x={120} y={y - 3}>分</text>
          </g>
        ) : ''}
      <SepLine 
        x={37}
        length={mergedTimeObjArr.length}
      />
      <SepLine 
        x={98}
        length={mergedTimeObjArr.length}
      />
    </g>
  )
}
SingleTime.propTypes = {
  hour: PropTypes.string.isRequired,
  normalMin: PropTypes.string,
  holidayMin: PropTypes.string,
  y: PropTypes.number
}
SingleSchedule.propTypes = {
  objArr: PropTypes.shape({
    id: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
  }),
}
BusSchedule.propTypes = {
  time: PropTypes.array.isRequired,
  forDemo: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number,
}