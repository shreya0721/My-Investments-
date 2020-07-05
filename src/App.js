import React, { Component } from 'react';
import './App.css';
import theme from '../src/utils/theme';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from '../src/views/Containers/HomeContainer';
import share from './assets/stock.jpg';
import SecondPage from './views/SecondPage';

const styles = (theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },
  },
  mainBackground: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundImage:`url(${share})`
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
});
class App extends Component {
  render() {
    console.log('theme', theme);
    const { classes } = this.props;
    return (
      // <MuiThemeProvider theme={theme}>
      <div className={classes.mainBackground}>
        <Router>
          <Switch>        
            <Route exact path="/" component={HomeContainer} />
            <Route path="/stock-information" component={SecondPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
