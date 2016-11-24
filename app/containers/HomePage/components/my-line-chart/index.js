/*
 * Line Chart
 */

import React from 'react';
import { LineChart } from 'react-d3-basic';

const styles = {
  header: {
    textAlign: 'center',
  },
  chart: {
    border: 'solid 1px #F0F0F0',
  },
  centeringFlexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }

}

const chartData = require('./user_sample.json');

var chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e',
        style: {
          strokeWidth: 3,
          strokeOpacity: .5,
          fillOpacity: .2
        }
      },
      {
        field: 'age',
        name: 'Age',
        color: '#B0849b',
        style: {
          strokeWidth: 3,
          strokeOpacity: .5,
          fillOpacity: .2
        }
      }
    ],
    x = function(d) {
      return d.index;
    }

export default class MyLineChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(chartData);
    return (
      <div style={styles.centeringFlexContainer}>
        <h3 style={styles.header}>Line Chart</h3>
        <LineChart
          title="BMI against"
          width={700}
          height={300}
          data={chartData}
          chartSeries= {chartSeries}
          x={x}
          style={styles.chart}
        />
      </div>
    );
  }
}
