/* eslint-disable no-undef */
import React from 'react'
import { 
  SplitBracketsText,
  getPassText,
 } from '../src/svg/Head'
import { shallow } from 'enzyme'
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
