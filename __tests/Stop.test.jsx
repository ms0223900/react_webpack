/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { setStopClassName } from '../src/svg/Stop'
import { shallow } from 'enzyme'

describe('test stops', () => {
  it('test set stop className function', () => {
    expect(setStopClassName('now', 'stopWithEng')).toBe('stopWithEng stopWithEng-now')
  })
  it('test set stop className function when passed is true', () => {
    expect(setStopClassName('passed', 'stop', true)).toBe('stop stop-passed')
  })

  
})
