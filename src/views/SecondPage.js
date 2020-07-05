import React,{ useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import HighchartComponent from './HighchartComponent';
import Paper from '@material-ui/core/Paper';


const styles = (theme) => ({
  root: {
    marginLeft: '20%',
    width: '54.7%',
    marginTop: '6%'
  }
})

function Home(props) {
const { classes } = props;
  return (
  <Paper className={classes.root} >
      <HighchartComponent />
    </Paper>

  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);