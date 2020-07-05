import React,{ useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from './Header';
import SearchPanel from './SearchPanel'



const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '1vw',
    paddingRight: '1vw',
  },
  cardSpacing: {
    flexGrow: 1,
    paddingLeft: '1.5px',
    paddingRight: '1.5px',
  }, 
  input: {
    display: 'none',
  }
})

function Home(props) {
  const { classes } = props;
  const [viewFrame, setViewFrame] = useState(false);
  const setViewFrameValue = (value) => {
    setViewFrame(value)
  } 
  
 
  return (
    <Grid container className={classes.root} spacing={2} xs={12}>
      <Header name={'ABC Products'} setViewFrameValue={setViewFrameValue}/>
     
      <Grid item xs={12} spacing={2} className={classes.cardSpacing}>
        <div style={{display:'flex',flexDirection:'column'}}>
      
    <SearchPanel rightTableData={props.rightTableData} />
        </div>
      </Grid>

     
    </Grid>


  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);