import React from 'react'


export class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt1_Width: 0,
      txt2_Width: 0,
    };
  }
  componentDidMount = () => {
    const txt1Width = this.txt1El.getBBox().width
    const txt2Width = this.txt2El ? this.txt2El.getBBox().width : 0
    this.setState({
      txt1_Width: txt1Width,
      txt2_Width: txt2Width,
    })
  }
  
  render() {
    const { x1FromRight=0, x2FromRight=0, y, txt1, txt2, location } = this.props
    const { txt1_Width, txt2_Width } = this.state
    return (
      <g>
        <text
          x={840 - txt1_Width - txt2_Width - x1FromRight - x2FromRight}
          y={y}
          ref={e => this.txt1El = e}
          className={`${location}-company-info`}
        >
          {txt1}
        </text>
        {txt2 !== '' ? 
          <text
            x={840 - txt2_Width - x2FromRight}
            y={y}
            ref={e => this.txt2El = e}
            className={`${location}-company-info`}
          >
            {txt2}
          </text> : ''
        }
      </g>
    );
  }
}