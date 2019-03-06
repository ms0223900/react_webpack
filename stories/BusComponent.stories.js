import React from 'react'
import { storiesOf } from '@storybook/react'

import { Stop_WithEng } from '../src/svg/Stop'
import { BusSchedule } from '../src/svg/BusSchedule'

export const normalStop = {
  id: 0,
  stopName: '西屯',
  stopNameEng: 'Xitun',
  stopType: 'normal',
  x: 100,
  y: 200,
  circleR: 6,
}

export const nowStop = {
  id: 1,
  stopName: '東勢監理分站',
  stopNameEng: 'Dongshi Motor Vehicle Substation',
  stopType: 'now',
  x: 250,
  y: 200,
  circleR: 6,
}

export const endStop = {
  id: 1,
  stopName: '虎尾',
  stopNameEng: 'Huwei',
  stopType: 'end',
  x: 400,
  y: 200,
  circleR: 6,
}

export const TIME = [
  ['0120', '0230', '0620', '0640'],
  ['0830', '1030', '1120']
]


storiesOf('BusStop', module)
  .add('stops', () => 
    <svg width='720' height='720'>
      <Stop_WithEng {...normalStop} />
      <text x='70' y='250'>normal stop</text>

      <Stop_WithEng {...nowStop} />
      <text x='220' y='250'>now stop</text>

      <Stop_WithEng {...endStop} />
      <text x='370' y='250'>end stop</text>
    </svg>
  )
  .add('bus schedule', () => 
    <svg width='720' height='720'>
      <BusSchedule time={TIME}/>
    </svg>
  )