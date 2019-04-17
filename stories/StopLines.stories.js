import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, radios } from '@storybook/addon-knobs'
import { mockChiaYiFile, mockYunlinFile } from './mockData'

import { getRouteByLocation } from '../src/svg/StopLine'

const stories = storiesOf('Route with multiple lines (up to 4 lines)', module)
stories.addDecorator(withKnobs)

export const getMockFiles = (location='ChiaYi', lines='1Line') => {
  if(location === 'ChiaYi') {
    return mockChiaYiFile[lines]
  } else {
    return mockYunlinFile[lines]
  }
}

stories
  .add('Route with multiple lines demos', () => {
    const label = 'locations';
    const options = {
          ChiaYi: 'ChiaYi',
          Yunlin: 'Yunlin',
          ChanHua: 'ChanHua',
    };
    const defaultValue = 'ChiaYi';
    const location = radios(label, options, defaultValue)

    const label2 = 'route lines';
    const options2 = {
      '1Line': '1Line',
      '2Lines': '2Lines',
      '3Lines': '3Lines',
      '4Lines': '4Lines',
    };
    const defaultValue2 = '1Line'
    const lines = radios(label2, options2, defaultValue2)
    return (
      <svg width='1000' height='720' key={location + lines}>
       {/* <text x='60' y='60'>1 line </text> */}
        {getRouteByLocation(location, getMockFiles(location, lines))}
      </svg>
    )
  })
  // .add('normal Route with 2 lines', () => (
  //   <svg width='1000' height='720'>
  //   <text x='60' y='60'>2 lines </text>
  //     {genarateRoutes(mockChiaYiFile['2Lines'])}
  //   </svg>
  // ))
  // .add('normal Route with 3 lines', () => (
  //   <svg width='1000' height='720'>
  //   <text x='60' y='60'>3 lines </text>
  //     {genarateRoutes(mockChiaYiFile['3Lines'])}
  //   </svg>
  // ))
  // .add('normal Route with 4 lines', () => (
  //   <svg width='1000' height='720'>
  //   <text x='60' y='60'>4 lines </text>
  //     {genarateRoutes(mockChiaYiFile['4Lines'])}
  //   </svg>
  // ))

// storiesOf('Stop Lines with normal RouteWithEngStops (text up)', module)
//   .add('normal Route with 1 line', () => (
//     <svg width='1000' height='720'>
//     <text x='60' y='60'>1 line </text>
//       {genarateRoutes_Yunlin(mockYunlinFile['1Line'])}
//     </svg>
//   ))
//   .add('normal Route with 2 lines', () => (
//     <svg width='1000' height='720'>
//     <text x='60' y='60'>2 lines </text>
//       {genarateRoutes_Yunlin(mockYunlinFile['2Lines'])}
//     </svg>
//   ))
//   .add('normal Route with 3 lines', () => (
//     <svg width='1000' height='720'>
//     <text x='60' y='60'>3 lines </text>
//       {genarateRoutes_Yunlin(mockYunlinFile['3Lines'])}
//     </svg>
//   ))
//   .add('normal Route with 4 lines', () => (
//     <svg width='1000' height='720'>
//     <text x='60' y='60'>4 lines </text>
//       {genarateRoutes_Yunlin(mockYunlinFile['4Lines'])}
//     </svg>
//   ))

// storiesOf('Stop Lines with normal RouteWithEngStops (text down)', module)
//   .add('normal Route with 1 line', () => (
//     <svg width='1000' height='720'>
//     <text x='60' y='60'>1 line </text>
//       {genarateRoutes_ChanHua(mockYunlinFile['1Line'])}
//     </svg>
//   ))
//   .add('normal Route with 2 lines', () => (
//     <svg width='1000' height='720'>
//     <text x='60' y='60'>2 lines </text>
//       {genarateRoutes_ChanHua(mockYunlinFile['2Lines'])}
//     </svg>
//   ))
//   .add('normal Route with 3 lines', () => (
//     <svg width='1000' height='720'>
//     <text x='60' y='60'>3 lines </text>
//       {genarateRoutes_ChanHua(mockYunlinFile['3Lines'])}
//     </svg>
//   ))
//   .add('normal Route with 4 lines', () => (
//     <svg width='1000' height='720'>
//     <text x='60' y='60'>4 lines </text>
//       {genarateRoutes_ChanHua(mockYunlinFile['4Lines'])}
//     </svg>
//   ))