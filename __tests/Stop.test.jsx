/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { 
  setStopClassName, 
  setTextY, 
  SpecialIcon,
  HospitalIcon,
  Stop,
  IconNow
 } 
from '../src/svg/Stop'
import { shallow, render, mount } from 'enzyme'

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
  it('test set text Y postion when UpOrDown is "Down"', () => {
    expect(setTextY('Eng', 6, 'Down', 10, 10)).toBe(17)
  })
  
  it('test it should have IconNow when the stopType is now', () => {
    const specialIcon = shallow(<SpecialIcon  stopType='now' />)
    expect(specialIcon.find(IconNow)).toHaveLength(1)
  })

  it('test hospital icon when "醫院" string is included', () => {
    const specialIcon = shallow(<SpecialIcon  stopName='OX醫院' />)
    expect(specialIcon.find(HospitalIcon)).toHaveLength(1)
  })
  it('test hospital icon when "醫院" string is included and the UpOrDown is down', () => {
    const specialIcon = shallow(<SpecialIcon  stopName='OX醫院' UpOrDown={'Down'} />)
    expect(specialIcon.find(HospitalIcon)).toHaveLength(0)
  })
  it('test hospital icon when "醫院" string is "not" included', () => {
    const specialIcon = shallow(<SpecialIcon  stopName='OX學院' />)
    expect(specialIcon.find(HospitalIcon)).toHaveLength(0)
  })
})
describe('test Stop component', () => {
  it('it should be have only one circle when the stopType is normal or passed', () => {
    const stopNormal = shallow(<Stop stopType={'normal'}/>)
    const stopPassed= shallow(<Stop stopType={'passed'}/>)
    expect(stopNormal.find('circle')).toHaveLength(1)
    expect(stopPassed.find('circle')).toHaveLength(1)
  })
  it('it should be have two circles when the stopType is now', () => {
    const stopNow = shallow(<Stop stopType={'now'}/>)
    expect(stopNow.find('circle')).toHaveLength(2)
  })
  
})

