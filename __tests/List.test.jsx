/* eslint-disable no-undef */
import React from 'react'
import List from '../src/components/List'
import { shallow } from 'enzyme'

describe('test react', () => {
  it('react with webpack', () => {
    const list = shallow(<List />)
    expect(list.find('li').length).toBe(1)
  })
})