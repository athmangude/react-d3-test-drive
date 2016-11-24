/*
 * Line Chart
 */

import React from 'react';
import { LineChart } from 'react-d3-basic';
// import topojson from 'topojson';
// var topojson = require('topojson');
import * as topojson from 'topojson-client';
import MapBubble from './map-bubble';
var css= require('./bubble.scss');

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

var width = 960,
  height = 960;

  var world = require('./world-50m.json');
  var earthquake = require('./earthquake.json');

  console.log(topojson, topojson.topology);

  // data should be a MultiLineString
  var countries = topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; });
  /// data should be polygon
  var land = topojson.feature(world, world.objects.land);

  // class
  var meshClass = 'border';
  var polygonClass = 'land';

  // domain
  var domain = {
    scale: 'sqrt',
    domain: d3.extent(earthquake, function(d) {return +d.deaths}),
    range: [0, 50]
  };

  var circles = earthquake
  var circleValue = function(d) { return +d.deaths; };

  var circleX = function(d) {return +d.lng};
  var circleY = function(d) {return +d.lat};

  var tooltipContent = function(d) {
    delete d.cell;
    delete d.comments;
    return d;
  }

  var scale = (width + 1) / 2 / Math.PI;
  var translate = [width / 2, height / 2];
  var precision = .1;
  var projection = 'mercator';

export default class EarthQuakeBubbleMap extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.centeringFlexContainer}>
        <h3 style={styles.header}>EarthQuake Bubble Map</h3>
        <MapBubble
          width= {width}
          height= {height}
          dataPolygon= {land}
          polygonClass= {polygonClass}
          dataMesh= {countries}
          meshClass = {meshClass}
          domain= {domain}
          dataCircle= {circles}
          circleValue= {circleValue}
          circleClass= {'bubble'}
          circleX= {circleX}
          circleY= {circleY}
          tooltipContent= {tooltipContent}
          projection= {projection}
          precision= {precision}
          translate= {translate}
          scale= {scale}
          showGraticule= {true}
          showTooltip= {true}
          showLegend= {false}
        />
      </div>
    );
  }
}
