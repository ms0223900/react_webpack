import React from 'react'
import { storiesOf } from '@storybook/react'

import { Stop, StopWithEng } from '../src/svg/Stop'
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
export const hospitalStop = {
  id: 1,
  stopName: 'OX醫院',
  stopNameEng: 'OX Hospital',
  stopType: 'normal',
  x: 500,
  y: 200,
  circleR: 6,
}

export const TIME = [
  ['0120', '0230', '0620', '0640'],
  ['0830', '1030', '1120']
]


storiesOf('BusStop', module)
  .add('stop with Chinese', () => 
    <svg width='720' height='720'>
      <Stop {...normalStop} />
      <text x='70' y='300'>normal stop</text>

      <Stop {...nowStop} />
      <text x='220' y='360'>now stop</text>


    </svg>
  )
  .add('stops with Chinese and English', () => 
    <svg width='720' height='720'>
      <StopWithEng {...normalStop} />
      <StopWithEng {...normalStop} y={'330'} UpOrDown={'Down'} />
      <text x='20' y='420'>normal stop with text down</text>
      <text x='70' y='250'>normal stop</text>

      <StopWithEng {...nowStop} />
      <text x='220' y='250'>now stop</text>

      <StopWithEng {...endStop} />
      <text x='370' y='250'>end stop</text>

      <StopWithEng {...hospitalStop} />
      <text x='470' y='250'>hospital stop</text>
    </svg>
  )
  .add('bus schedule', () => 
    <svg width='720' height='720'>
      <BusSchedule time={TIME}/>
    </svg>
  )