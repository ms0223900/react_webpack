/* eslint-disable no-undef */
import React from 'react'
import { 
  removeDupliArr,
  sepTimeToHourMin,
  setTimeToHM_multiple,
  mergeTimeByHour,
  merge2Time_ByHour,
  textAlignCenter,
  SepLine,
  SingleTime,
  SingleSchedule,
  BusSchedule,
} from '../src/svg/BusSchedule'
import { Rect } from '../src/svg/SVGComponents'
import { shallow } from 'enzyme'

describe('test handle time array functions', () => {
  it('test function of removing same value', () => {
    const arr = ['0011', '0022', '0011', '0033']
    const removedArr = ['0011', '0022', '0033']
    expect(removeDupliArr(arr)).toEqual(removedArr)
  })
  it('test time string should be split to hour and minute format, if you gave wrong format it should throw error.', () => {
    const timeStr = '0011'
    const timeStr2 = '2901'
    const mockCorrect = ['00', '11']
    expect(sepTimeToHourMin(timeStr)).toEqual(mockCorrect)
    expect(() => sepTimeToHourMin(timeStr2)).toThrowError('You have the wrong format of time string!')
  })
  it('test time arrays should be seperate to hour and min by sepTimeToHourMin_multiple function', () => {
    const arr = [
      ['0011', '0022', '0011', '0033'],
      ['0011', '0022']
    ]
    const sepArr = [
      [['00', '11'], ['00', '22'], ['00', '11'], ['00', '33']],
      [['00','11'], ['00','22']]
    ]
    expect(setTimeToHM_multiple(arr)).toEqual(sepArr)
  })
  it('it should merge minutes by per hours by mergeTimeByHour function. ', () => {
    const arr = [['00', '11'], ['00', '22'], ['00', '11'], ['00', '33'], ['11', '22']]
    
    const mergedArr = [
      ['00', '11', '22', '11', '33'], ['11', '22']
    ]
    expect(mergeTimeByHour(arr)).toEqual(mergedArr)
  })
  it('it should merge up to two time array to one time array by merge2Time_ByHour function', () => {
    const mergedArr1 = [
      ['00', '11', '22', '33'], ['11', '22']
    ]
    const mergedArr2 = [
      ['02', '11', '22', '44'], ['11', '33']
    ]
    const mergedByHourArr = [
      ['00', ['11', '22', '33'], ['-']],
      ['02', ['-'], ['11', '22', '44']],
      ['11', ['22'], ['33']],
    ]
    const mergedOnlyOneByHourArr = [
      ['00', ['11', '22', '33']],
      ['11', ['22']],
    ]
    expect(merge2Time_ByHour([mergedArr1, mergedArr2])).toEqual(mergedByHourArr)
    expect(merge2Time_ByHour([mergedArr1])).toEqual(mergedOnlyOneByHourArr)
  })
})
describe('test functions and other components', () => {
  it('test text align center function', () => {
    expect(textAlignCenter('aaa', 7, 10)).toBe((10 - 3 * 7) / 2)
    expect(textAlignCenter('abcdefg', 5, 10)).toBe(6)
  })
  it('test y2 of sepLine component ', () => {
    const sepLine = shallow(<SepLine />)
    expect(sepLine.props().y2).toBe(173)
    const sepLine2 = shallow(<SepLine length={3} />)
    expect(sepLine2.props().y2).toBe(217)
  })
})

describe('test BusSchedule components', () => {
  const objArr = [
    { id: 0, data: ['00', ['11', '22', '33']], },
    { id: 1, data: ['00', ['11', '22', '33']], },
    { id: 2, data: ['00', ['11', '22', '33'], ['44']], }
  ]
  it('the Rect component should be only appear when the id is odd', () => {
    const singleSchedule = shallow(<SingleSchedule objArr={objArr[0]} />)
    expect(singleSchedule.find(Rect)).toHaveLength(0)
    const singleSchedule2 = shallow(<SingleSchedule objArr={objArr[1]} />)
    expect(singleSchedule2.find(Rect)).toHaveLength(1)
  })
  it('test part of holiday minute should be the same when there is no holiday minute data.', () => {
    const singleSchedule = shallow(<SingleSchedule objArr={objArr[1]} />)
    expect(singleSchedule.find(SingleTime).props().holidayMin).toBe('11 22 33')
    const singleSchedule2 = shallow(<SingleSchedule objArr={objArr[2]} />)
    expect(singleSchedule2.find(SingleTime).props().holidayMin).toBe('44')
  })
  it('test BusSchedule component', () => {
    const mockTimeData = [['0011', '0022', '1122'], ['0033', '0044']]
    const busSchedule = shallow(<BusSchedule time={mockTimeData} />)
    expect(busSchedule.find(SingleSchedule)).toHaveLength(2)
  })
})

