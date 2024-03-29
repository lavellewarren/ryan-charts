import './App.css';

import React, { Component } from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import ColumnChart from './ColumnChart';
import LineChart from './LineChart';
import LineChart2 from './LineChart2';
import RadialChart from './RadialChart';
import BarChart from './BarChart';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <header className="App-header">
            <Link
              className="App-link"
              to="/linechart"
            >
              GradientLineChart
            </Link>
            <Link
              className="App-link"
              to="/radialchart"
            >
              RadialProgressChart
            </Link>
            <Link
              className="App-link"
              to="/columnchart"
            >
              RoundedBarChart
            </Link>
            <Link
              className="App-link"
              to="/areachart"
            >
              GradientAreaChart
            </Link>
            <Link
              className="App-link"
              to="/barchart"
            >
              BarChart
            </Link>
          </header>
          <Switch>
            <Route path="/linechart" component={LineChart} />
            <Route path="/radialchart" component={RadialChart} />
            <Route path="/columnchart" component={ColumnChart} />
            <Route path="/areachart" component={LineChart2} />
            <Route path="/barchart" component={BarChart} />
            <Route path="/" component={LineChart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
