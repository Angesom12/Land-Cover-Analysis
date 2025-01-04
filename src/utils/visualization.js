var config = require('../config.js');

exports.createLegend = function() {
  var legend = ui.Panel({style: {width: '250px'}});
  legend.add(ui.Label('Land Cover'));
  
  var classValues = Object.keys(config.landCoverClasses).map(Number);
  
  classValues.forEach(function(value) {
    var colorBox = ui.Label({
      style: {
        backgroundColor: config.landCoverColors[value],
        padding: '10px',
        margin: '0 0 4px 0'
      }
    });
    var description = ui.Label({
      value: config.landCoverClasses[value],
      style: {margin: '0 0 4px 8px'}
    });
    legend.add(ui.Panel([colorBox, description], ui.Panel.Layout.Flow('horizontal')));
  });
  
  return legend;
};

exports.createPieChart = function(areaCollection) {
  return ui.Chart.feature.groups({
    features: areaCollection,
    xProperty: 'Land Cover',
    yProperty: 'Area',
    seriesProperty: 'Unit'
  }).setChartType('PieChart').setOptions({
    title: 'Land Cover Classification - Area Distribution',
    slices: {
      0: {color: '#006400'},
      1: {color: '#ffbb22'},
      2: {color: '#ffff4c'},
      3: {color: '#f096ff'},
      4: {color: '#fa0000'},
      5: {color: '#b4b4b4'},
      6: {color: '#0064c8'}
    },
    pieSliceText: 'value-and-percentage',
    pieSliceTextStyle: {
      color: 'black',
      fontSize: 12
    },
    pieSliceBorderColor: 'white',
    pieSliceTextPosition: 'inside',
    legend: { position: 'right' }
  });
};
