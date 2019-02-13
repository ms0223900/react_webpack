import React from 'react'
// import 'typeface-roboto'
import { Paper, withStyles, Typography, Button } from '@material-ui/core'
// import { AccessTime } from '@material-ui/icons' 

const styles = {
  timerCard: {
    width: '100%',
    textAlign: 'center',
    verticalAlign: 'middle',
  }
}
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.timer;
  }
  
  render() {
    const { 
      classes, 
      isStart, 
      count = '00 : 00',
      handleClickTimer } = this.props;
    return (
      <Paper className={classes.timerCard}>
        <Typography variant="display2">{ count }</Typography >
        <Button
          color={isStart ? 'default' : 'primary'}
          variant="contained"
          onClick={handleClickTimer}
        >
          {isStart ? 'Stop' : 'Start'}
        </Button>
        <Button
          onClick={this.props.handleReset}
        >
          Reset
        </Button>
      </Paper>
    );
  }
}

export default withStyles(styles)(Timer);