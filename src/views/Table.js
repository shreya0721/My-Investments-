import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withRouter} from 'react-router-dom';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '1px',
    backgroundColor:'#1B1F38',
    overflowX: 'auto',
    height:'197px',
    width: '59%',
    marginLeft: '22%',
    marginTop: '4%',
    border: '1px solid white'
  },
  table: {
    minWidth: 494,
  },
  tableWrapper: {
    overflowX: 'auto',
    maxHeight:'197px',
    overFlowY:'auto'
  },
});

let id = 0;
function createData(investment_name,amount_invested,date_of_maturity) {
  id += 1;
  return { id, investment_name,amount_invested,date_of_maturity };
}

class SimpleTable extends React.Component {
    state = {
      rows:[]
      };
    goToDetailedTable=(row)=>{
    //  let filteredData=dataForTable2.filter(data=>data.customer_name===row.customer_name)
      this.props.history.push({
        pathname: '/stock-information',
        // state: {
        //   key : filteredData,
        //   customer_name : row.customer_name,
        //   customer_number : row.customer_number
        // }
      })
    }

    
  componentDidMount=()=>{   
    
    let newData = this.props.rightTableData;     
    newData.length>0 && newData.map(index=>{
      this.setState((state) => ({
        rows:[...state.rows, createData(index.investment_name,index.amount_invested,index.date_of_maturity)],
      }) )
    })     
  
  
}
    render(){
        const { classes } = this.props;
        const { rows } = this.state;

  return (
    <Paper className={classes.root}>
         <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{borderRight:"1px solid white"}}><Typography style={{color:'white'}}>Investment Name</Typography></TableCell>
            <TableCell style={{borderRight:"1px solid white"}} align="right"><Typography style={{color:'white'}}>Amount Invested</Typography></TableCell>
            <TableCell  align="right"><Typography style={{color:'white'}}>Date of Maturity</Typography></TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}  style={{cursor:'pointer'}} >
              <TableCell component="th" scope="row" style={{borderRight:"1px solid white"}}>
              <Typography onClick={()=>this.goToDetailedTable(row)} style={{color:'white'}}><u>{row.investment_name}</u></Typography>
              </TableCell>
              <TableCell align="right" style={{borderRight:"1px solid white"}}><Typography style={{color:'white'}}>{row.amount_invested}</Typography></TableCell>
              <TableCell align="right" ><Typography style={{color:'white'}}>{row.date_of_maturity}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      </div>
    </Paper>
  );
    }
  
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SimpleTable));
