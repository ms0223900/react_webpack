import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

function AA(props) {
  return (
  <h2>
    this is a AA11aasdasdsk!
  </h2>);
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <h1>Hi App</h1>
        <AA />
      </Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log('app12221.jsx');