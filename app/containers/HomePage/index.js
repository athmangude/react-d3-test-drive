/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import MyLineChart from './components/my-line-chart';

const styles = {
  header: {
    textAlign: 'center',
  }
}

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1 style={styles.header}>Getting started with D3</h1>
        <MyLineChart />
      </div>
    );
  }
}
