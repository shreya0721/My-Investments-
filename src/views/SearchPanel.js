import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SimpleTable from './Table';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    
  }, 
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: '100%',
    },
  },

  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#1B1F38',
    '&:hover': {
      backgroundColor: '#1B1F38',
    },
    border:'1px solid white'
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    height:'20px'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    height:'20px',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  
});



class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    dataForTable:null,
    dataForTable2:[]
  };
   handleChange = (event) => {  
    this.filterData(event.target.value);
  }

  filterData = (value) => {
    let tableData = this.props.rightTableData.tableData;
    let filteredData = tableData.filter((data) => {
      if (data.customer_no === value) {
        return data
      }
    }
    )
    this.setState({ dataForTable2: filteredData })
  }
  
  render() {   
    const { classes } = this.props;  
   return (
     
      <div className={classes.root}>
     <Paper style={{height: '125px',border: '1px solid white', width: '40%', marginLeft: '31%',marginTop: '2%',backgroundColor:'#1B1F38'}}>
     <Typography style={{color:'white',marginTop:'3%',marginLeft:'22%'}}>Please enter your 6 digit customer id:</Typography>
        <AppBar position="static" style={{height:'34px',width:'69%',marginLeft: '15%',marginTop: '3%'}}>       
          <Toolbar style={{height:'40px',minHeight:'40px',width: '93%',paddingLeft:0,backgroundColor: 'white'}}>
        
            <div  style={{width:'100%'}}className={classes.search}>
              <div className={classes.searchIcon} >
                <SearchIcon autoid='search-icon' />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={this.handleChange}    
                autoid='search-text-field'          
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>                     
          </Toolbar>
        </AppBar>  
        </Paper>  
     {this.state.dataForTable2.length>0 && <SimpleTable rightTableData={this.state.dataForTable2}/>}
    
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
