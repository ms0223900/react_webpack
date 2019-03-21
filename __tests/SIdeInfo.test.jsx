/* eslint-disable no-undef */
import React from 'react'
import { 
  SideInfo_ChanHua,
} from '../src/svg/SideInfo'
import { shallow } from 'enzyme'

describe('test sideInfo component', () => {
  it('test amount of text in sideInfo_ChanHua component', () => {
    const sideInfo_ChanHua = shallow(
      <SideInfo_ChanHua byPass={'AAA'} time={['1100~1200']} />
    )
    expect(sideInfo_ChanHua.find('text')).toHaveLength(2)
    expect(sideInfo_ChanHua.find('text').get(1).props.y).toBe(200)
  })
})
