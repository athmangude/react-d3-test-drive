/*
 * Line Chart
 */

import React from 'react';

import { TableTooltip, SimpleTooltipStyle, LineTooltip } from 'react-d3-tooltip';

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

var chartData = require('dsv?delimiter=,!./garbage.csv');

// your date format, use for parsing
var parseDate = d3.time.format("%YM%m").parse;

var width = 700,
  height = 300,
  margins = {top: 30, right: 70, bottom: 30, left: 50},
  id = "simple-line-chart",
  title = "Taiwan refuse disposal",
  svgClassName = "simple-line-chart",
  titleClassName = "test-chart-title-class",
  // show xaxis or not
  showXAxis = true,
  // show yaxis or not
  showYAxis = true,
  // chart series,
  // field: is what field your data want to be selected
  // name: the name of the field that display in legend
  // color: what color is the line
  chartSeries = [
    {
      field: 'total',
      name: 'Total',
      color: '#E91E63'
    },
    {
      field: 'recycle',
      name: 'Recycle',
      color: '#03A9F4'
    },
    {
      field: 'incineration',
      name: 'Incineration',
      color: '#9C27B0'
    },
    {
      field: 'garbageBury',
      name: 'Buried',
      color: '#00BCD4'
    },
    {
      field: 'foodWaste',
      name: 'Food Waste',
      color: '#81C784'
    }
  ],
  // your x accessor
  x = function(d) {
    return parseDate(d.month);
  },
  xOrient = 'bottom',
  xTickOrient = 'top',
  xDomain = d3.extent(chartData, function(d){ return x(d) }),
  xRange = [0, width - margins.left - margins.right],
  xScale = 'time',
  xAxisClassName = 'x-axis',
  xLabel = "Month",
  xLabelPosition = "left",
  // your y accessor
  y = function(d) {
    return +d;
  },
  yOrient = 'right',
  yTickOrient = 'right',
  // find max and min
  yDomain = [0, d3.max(chartData, function(d) {return d.total;})],
  yRange = [height - margins.top - margins.bottom, 0],
  yScale = 'linear',
  yAxisClassName = 'y-axis',
  yLabelPosition = 'left',
  yLabel = "Amount";

export default class TaiwanRefuseDisposal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(chartData);
    return (
      <div style={styles.centeringFlexContainer}>
        <h3 style={styles.header}>Taiwan Refuse Disposal</h3>
        <LineTooltip
          title= {title}
          data= {chartData}
          width= {width}
          height= {height}
          id= {id}
          margins= {margins}
          svgClassName= {svgClassName}
          titleClassName= {titleClassName}
          yAxisClassName= {yAxisClassName}
          xAxisClassName= {xAxisClassName}
          chartSeries= {chartSeries}
          showXAxis= {showXAxis}
          showYAxis= {showYAxis}
          x= {x}
          xDomain= {xDomain}
          xRange= {xRange}
          xScale= {xScale}
          xOrient= {xOrient}
          xTickOrient= {xTickOrient}
          xLabel = {xLabel}
          xLabelPosition = {xLabelPosition}
          y= {y}
          yOrient= {yOrient}
          yDomain= {yDomain}
          yRange= {yRange}
          yScale= {yScale}
          yTickOrient= {yTickOrient}
          yLabel = {yLabel}
          yLabelPosition = {yLabelPosition}
        >
          <TableTooltip />
        </LineTooltip>
        <hr />
      </div>
    );
  }
}
