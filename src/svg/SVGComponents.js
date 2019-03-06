import React from 'react'
import bigArrow from '../images/BigArrow-white.svg'

const HalfCircle = (props) => {
  const { pos1: [x1, y1], dir=0, r=20, clockDir=0 } = props
  const dxdy = [`0 -${r * 2}`, `${r * 2} 0`, `0 ${r * 2}`, `-${r * 2} 0`][dir]
  return (
    <path d={`
      M ${x1} ${y1} 
      a ${r} ${r}, 0, 0 ${clockDir}, ${dxdy}
      `}
      {...props} 
    />
  )
}


const Circle = (props) => {
  const { className='circle', cx=40, cy=40, r='30', fill } = props;
  // const { cx='40', cy='40', r='30', stroke='none', strokeWidth='0', fill='#000' } = props;
  return (
    <circle cx={cx} cy={cy} r={r} className={className} fill={fill} />
  );
}

const Rect = (props) => {
  const { x='200', y='200', width='100', height='100', className='svg-rect' } = props
  return (
    <rect x={x} y={y} width={width} height={height} className={className}/>
  )
}

//path line
const Line = (props) => {
  const { x1='100', y1='300', x2='300', y2='300', className='svg-line' } = props;
  return (
    <path d={`M ${x1} ${y1} L ${x2} ${y2}`} className={className}/>
  );
}  

const Text = (props) => {
  const { x='200', y='300', text='A text', className='svg-text' } = props
  return (
    <text x={x} y={y} className={className} {...props} >
      {text}
    </text>
  )
}

const LinearGradient = (props) => {
  const { id='LG', color1='#fff', color2='#000' } = props
  return (
    <defs>
      <linearGradient id={id}>
        <stop offset="0%" style={{ 'stop-color': color1, 'stop-opacity': 1 }} />
        <stop offset="100%" style={{ 'stop-color': color2, 'stop-opacity': 1 }} />
      </linearGradient>
    </defs>
  )
}

export const Arrow = (props) => {
  const { x, y, rotate=0 } = props
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotate})`}  > 
      <path d={'M0 0 l16 6 l-16 6 z'} />
    </g>
  )
}

export const BigArrow = (props) => {
  const { x=100, y=100, width=40, height=20, rotate=0 } = props
  return (
    <g
      transform={`translate(${x}, ${y}) rotate(${rotate})`}
    > 
      <image 
        width={width} 
        height={height}
        xlinkHref={bigArrow} 
        class={'bigArrow'}
      />
    </g>
  )
}

export const LineArrow = (props) => {
  const { x=0, y=0 } = props
  return (
    <g transform={`translate(${x}, ${y})`}>
      <polyline 
        fill='none'
        stroke='#487C8F'
        stroke-width='4'
        stroke-linecap='round'
        stroke-linejoin='round'
        points="0.4 0.2, 7.5 15.6, 14 0.2 "
        className='line-arrow'
      />
    </g>
    
  )
}

export const RoundedCorner = (props) => {
  const { x, y, h, v } = props
  let { r } = props
  // max radius
  if(r > Math.abs(h / 2)  || r > Math.abs(v / 2)) {
    if(h > v) {
      r = Math.abs(h / 2)
    }
    r = Math.abs(v / 2)
  }
  // to adjust the line direction, change r to vector r
  let 
    rh = h >= 0 ? r : -r, 
    rv = v >= 0 ? r : -r;

  return (
    <path 
      d={`
        M${x} ${y} 
        h${ h >= 0 ? h - r : h + r } 
        q${rh} 0, ${rh} ${rv} 
        v${ v >= 0 ? v - r * 2 : v + r * 2 } 
        q0 ${rv}, ${-rh} ${rv} 
        h${h >= 0 ? -(h - r) : -(h + r) } 
      `}
      fill={'none'} 
      stroke={'#000'} 
      strokeWidth={2.5}
      {...props} />
  )
}



export { Line, Rect, Circle, HalfCircle, Text, LinearGradient };