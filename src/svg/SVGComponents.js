import React from 'react'

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
  const { className='circle', cx='40', cy='40', r='30', fill } = props;
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
    <text x={x} y={y} className={className}>
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

export { Line, Rect, Circle, HalfCircle, Text, LinearGradient };