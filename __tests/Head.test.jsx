/* eslint-disable no-undef */
import React from 'react'
import { 
  SplitBracketsText,
  getPassText,
  RouteNumber,
  StopFromTo_ChiaYi,
  StopFromTo_Yunlin,
  ByPass_Yunlin,
  Head_ChiaYi,
  Head_Yunlin,
  Head_ChanHua,
 } from '../src/svg/Head'
import { BigArrow } from '../src/svg/SVGComponents'
import { shallow, render } from 'enzyme'
describe('', () => {
  it('test split bracket component', () => {
    const splitBracketsText = shallow(<SplitBracketsText splitText={'aaa'} />)
    expect(splitBracketsText.text()).toBe('')
    const splitBracketsText2 = shallow(<SplitBracketsText splitText={'aaa(bbb)'} />)
    expect(splitBracketsText2.text()).toBe('(bbb)')
  })
  it('test pass text function', () => {
    expect(getPassText(['aaa', 'bbb'])).toEqual(['(aaa)', '經bbb'])
    expect(getPassText(['aaa'])).toEqual(['', ''])
  })
})
describe('test Head components', () => {
  it('test Head of ChiaYi', () => {
    const headChiaYi = shallow(<Head_ChiaYi />)
    expect(headChiaYi.find(RouteNumber)).toHaveLength(1)
    expect(headChiaYi.find('image')).toHaveLength(1)
    expect(headChiaYi.find(StopFromTo_ChiaYi)).toHaveLength(2)
    expect(headChiaYi.find(BigArrow)).toHaveLength(1)
  })
  it('test Head of Yunlin', () => {
    const headYunlin = shallow(<Head_Yunlin />)
    expect(headYunlin.find(RouteNumber)).toHaveLength(1)
    expect(headYunlin.find(StopFromTo_Yunlin)).toHaveLength(2)
    expect(headYunlin.find(ByPass_Yunlin)).toHaveLength(1)
  })
  it('test Head of ChanHua', () => {
    const headChanHua = render(<Head_ChanHua />)
    expect(headChanHua.find('.routeNumber-ChanHua')).toHaveLength(1)
    expect(headChanHua.find('.arrow-text-ChanHua')).toHaveLength(1)
    expect(headChanHua.find('.fromTo-ChanHua')).toHaveLength(2)
  })
})

