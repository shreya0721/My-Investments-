import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginLeft:'31%'
  },
  chip: {
    margin: theme.spacing.unit,
    backgroundColor:'orange'
   
  },
});

function handleClick(props) {
  props.setViewFrameValue(true);
}

function LabelStripHeader(props) {
  const { classes,label,labelhref,chipMargin,clickable,chipBorder,chipMarginTop,chipHeight } = props;
  
  return (
    <div className={classes.root}>
      <Chip label={label} 
      className={classes.chip} 
      variant="outlined"
      href={labelhref}
      autoid="professor-button"
      onClick={()=>handleClick(props)}
      style={{marginLeft:chipMargin, borderRadius:chipBorder, marginTop:chipMarginTop, height:chipHeight}}
      clickable={clickable}
       />   
    
    </div>
  );
}

LabelStripHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelStripHeader);