import React from 'react'
import { storiesOf } from '@storybook/react'

import { Stop_WithEng } from '../src/svg/Stop'

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