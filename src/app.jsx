import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import '../styles/style.scss';

import List from './components/List';

function AA(props) {
  return (
  <h2>
    this is a AA11sasdask!
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
        <List />
        <button className={'button2'}>
          button
        </button>
      </Fragment>
    );
  }
}

export default App;
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log('app12221.jsx');