// Import configurations and utilities
var config = require('./config.js');
var visualization = require('./utils/visualization.js');

// Load the ESA WorldCover collection
var wc = ee.ImageCollection("ESA/WorldCover/v200");

// Rename bands
var renamedCollection = wc.map(function(image) {
  return image.select(['Map']).rename(['LULC']);
});

// Get the first image
var lulc = renamedCollection.first();

// Mask unwanted classes
var mask = lulc.select('LULC')
  .neq(70)
  .and(lulc.select('LULC').neq(95))
  .and(lulc.select('LULC').neq(90))
  .and(lulc.select('LULC').neq(100));
lulc = lulc.updateMask(mask);

// Create visualization parameters
var classValues = Object.keys(config.landCoverColors).map(Number);
var palette = classValues.map(function(key) {
  return config.landCoverColors[key];
});

var visParams = {
  min: 10,
  max: 80,
  palette: palette
};

// Center map and add layers
Map.centerObject(geometry);
Map.addLayer(lulc.select('LULC').clip(geometry), visParams, 'LULC_Hirmi_Watershed');

// Calculate areas
var area = classValues.map(function(value) {
  if (config.landCoverClasses.hasOwnProperty(value)) {
    var featureArea = lulc.select('LULC')
      .eq(value)
      .multiply(ee.Image.pixelArea().divide(10000))
      .reduceRegion({
        reducer: ee.Reducer.sum(),
        geometry: geometry,
        scale: 30,
        bestEffort: true
      }).get('LULC');
    
    featureArea = ee.Algorithms.If(
      ee.Algorithms.IsEqual(featureArea, null), 
      0, 
      featureArea
    );
    
    return ee.Feature(null, {
      'Land Cover': config.landCoverClasses[value], 
      'Area': ee.Number(featureArea).ceil(), 
      'Unit': 'Ha'
    });
  }
  return ee.Feature(null, {});
});

// Create FeatureCollection for export
var areaCollection = ee.FeatureCollection(area);

// Export to CSV
Export.table.toDrive({
  collection: areaCollection,
  description: 'HirmiWS_LULC',
  fileFormat: 'CSV'
});

// Add legend to map
Map.add(visualization.createLegend());

// Create and print pie chart
var pieChart = visualization.createPieChart(areaCollection);
print(pieChart);

// Export to GEE Asset
Export.image.toAsset({
  image: lulc,
  description: 'HirmiWS_LULC',
  assetId: 'projects/ee-angesom/assets/HirmiWS_LULC',
  scale: config.exportParams.scale,
  region: geometry,
  crs: config.exportParams.crs,
  crsTransform: config.exportParams.crsTransform
});
