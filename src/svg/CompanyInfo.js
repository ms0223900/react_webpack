import React from 'react'


export const CompanyInfo = (props) => {
  const { x1, x2, y, txt1, txt2, location } = props
  return (
    <g>
      <text
        x={x1}
        y={y}
        className={`${location}-company-info`}
      >
        {txt1}
      </text>
      <text
        x={x2}
        y={y}
        className={`${location}-company-info`}
      >
        {txt2}
      </text>
    </g>
  )
}