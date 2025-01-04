// Land cover class definitions
exports.landCoverClasses = {
  10: 'Tree cover',
  20: 'Shrubland',
  30: 'Grassland',
  40: 'Cropland',
  50: 'Built-up',
  60: 'Bare / sparse vegetation',
  80: 'Permanent water bodies'
};

// Color scheme for visualization
exports.landCoverColors = {
  10: '#006400',  // Dark green for Tree cover
  20: '#ffbb22',  // Orange for Shrubland
  30: '#ffff4c',  // Yellow for Grassland
  40: '#f096ff',  // Pink for Cropland
  50: '#fa0000',  // Red for Built-up
  60: '#b4b4b4',  // Gray for Bare/sparse vegetation
  80: '#0064c8'   // Blue for Water bodies
};

// Export parameters
exports.exportParams = {
  scale: 30,
  crs: 'EPSG:32637',
  crsTransform: [10, 0, 0, 0, -10, 0]
};

// Visualization parameters
exports.visParams = {
  min: 10,
  max: 80
};

// Chart styling
exports.chartOptions = {
  title: 'Land Cover Classification - Area Distribution',
  pieSliceText: 'value-and-percentage',
  pieSliceTextStyle: {
    color: 'black',
    fontSize: 12
  },
  pieSliceBorderColor: 'white',
  pieSliceTextPosition: 'inside',
  legend: { position: 'right' }
};

// Mask values
exports.maskValues = [70, 90, 95, 100];
