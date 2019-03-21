/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { CompanyInfo } from '../src/svg/CompanyInfo'
import { shallow, render } from 'enzyme'

describe('test companyInfo text className', () => {
  it('test amount of text', () => { 
    const companyInfo = render(<CompanyInfo txt1='aa' location={'ChanHua'}/>)
    expect(companyInfo.find('text')).toHaveLength(1)
    expect(companyInfo.find('.ChanHua-company-info')).toHaveLength(1)
    const companyInfo2 = render(<CompanyInfo txt1='aa'txt2='bb' location={'Yunlin'}/>)
    expect(companyInfo2.find('text')).toHaveLength(2)
    expect(companyInfo2.find('.Yunlin-company-info')).toHaveLength(2)
  })
})
