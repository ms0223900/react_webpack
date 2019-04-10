import React from 'react'
import { storiesOf } from '@storybook/react'
import { mockChiaYiFile, mockYunlinFile } from './mockData'

import { genarateRoutes, genarateRoutes_Yunlin } from '../src/svg/StopLine'

storiesOf('Stop Lines with normal route', module)
  .add('normal Route with 1 line', () => (
    <svg width='800' height='720'>
     <text x='60' y='60'>1 line </text>
      {genarateRoutes(mockChiaYiFile['1Line'])}
    </svg>
  ))
  .add('normal Route with 2 lines', () => (
    <svg width='1000' height='720'>
    <text x='60' y='60'>2 lines </text>
      {genarateRoutes(mockChiaYiFile['2Lines'])}
    </svg>
  ))
  .add('normal Route with 3 lines', () => (
    <svg width='1000' height='720'>
    <text x='60' y='60'>3 lines </text>
      {genarateRoutes(mockChiaYiFile['3Lines'])}
    </svg>
  ))
  .add('normal Route with 4 lines', () => (
    <svg width='1000' height='720'>
    <text x='60' y='60'>4 lines </text>
      {genarateRoutes(mockChiaYiFile['4Lines'])}
    </svg>
  ))
  

storiesOf('Stop Lines with normal RouteWithEngStops', module)
  .add('normal Route with 1 line', () => (
    <svg width='1000' height='720'>
    <text x='60' y='60'>1 line </text>
      {genarateRoutes_Yunlin(mockYunlinFile['1Line'])}
    </svg>
  ))
  .add('normal Route with 2 lines', () => (
    <svg width='1000' height='720'>
    <text x='60' y='60'>2 lines </text>
      {genarateRoutes_Yunlin(mockYunlinFile['2Lines'])}
    </svg>
  ))
  .add('normal Route with 3 lines', () => (
    <svg width='1000' height='720'>
    <text x='60' y='60'>3 lines </text>
      {genarateRoutes_Yunlin(mockYunlinFile['3Lines'])}
    </svg>
  ))
  .add('normal Route with 4 lines', () => (
    <svg width='1000' height='720'>
    <text x='60' y='60'>4 lines </text>
      {genarateRoutes_Yunlin(mockYunlinFile['4Lines'])}
    </svg>
  ))