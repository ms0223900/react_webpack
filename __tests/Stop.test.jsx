/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'

import { 
  setStopClassName, 
  setTextY, 
  SpecialIcon,
  HospitalIcon,
  getStopUpOrDown,
  StopWithEng
 } 
from '../src/svg/Stop'

import { shallow } from 'enzyme'

describe('test stops', () => {
  it('test set stop className function', () => {
    expect(setStopClassName('now', 'stopWithEng')).toBe('stopWithEng stopWithEng-now')
  })
  it('test set stop className function when passed is true', () => {
    expect(setStopClassName('passed', 'stop', true)).toBe('stop stop-passed')
  })

  it('test set text Y postion when language is Chinese', () => {
    expect(setTextY('Chi', 6, 'Up', 10, 10)).toBe(-17)
  })
  it('test set text Y postion when language is English', () => {
    expect(setTextY('Eng', 6, 'Up', 10, 10)).toBe(-19)
  })
  
  it('test hospital icon when "醫院" string is included', () => {
    const specialIcon = shallow(<SpecialIcon  stopName='OX醫院' />)
    expect(specialIcon.find(HospitalIcon)).toHaveLength(1)
  })
  it('test hospital icon when "醫院" string is "not" included', () => {
    const specialIcon = shallow(<SpecialIcon  stopName='OX學院' />)
    expect(specialIcon.find(HospitalIcon)).toHaveLength(0)
  })
  it('test getStopUpOrDown function', () => {
    // const stopWithEngDown = shallow(<StopWithEng UpOrDown='Down'/>)
    expect(getStopUpOrDown('Down')).toEqual(<StopWithEng UpOrDown='Down'/>)
  })

})