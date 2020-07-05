import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types'; 
import LabelStripHeader from '../components/LabelStripHeader';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: 0,
    paddingBottom: theme.spacing.unit * 2,
    height:'33px',
    backgroundColor:'#1B1F38',
  


  },
});

function Header(props) {
  const { classes,name,number, secondPage } = props;
function goBack() {
  console.log(props.location)
}

  return (
    <div style={{width:'100%'}}> 
      <Paper className={classes.root} elevation={1}>
        <Typography style={{color:'white',fontSize:'28px',marginLeft: '43%'}}> My Investments </Typography>
      </Paper>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);