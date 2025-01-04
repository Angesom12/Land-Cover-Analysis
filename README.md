# Land-Cover-Analysis
This code processes ESA WorldCover data in Google Earth Engine to analyze land cover in the Hirmi Watershed. It classifies and visualizes seven land cover types (tree cover, shrubland, grassland, cropland, built-up areas, bare vegetation, and water bodies), calculates their areas in hectares, and exports results as CSV and GEE assets.

Land Cover Analysis in Google Earth Engine
This code processes ESA WorldCover data in Google Earth Engine to analyze land cover in the Hirmi Watershed. It classifies and visualizes seven land cover types (tree cover, shrubland, grassland, cropland, built-up areas, bare vegetation, and water bodies), calculates their areas in hectares, and exports results as CSV and GEE assets.
Features

## 1. Repository Structure
```
land-cover-analysis/
├── README.md
├── src/
│   ├── main.js
│   ├── config.js
│   └── utils/
│       └── visualization.js
├── data/
│   └── .gitkeep
├── output/
│   └── .gitkeep
└── docs/
    └── technical_documentation.md
```
# Land Cover Analysis

This repository contains code for analyzing land cover using Google Earth Engine (GEE). The code processes ESA WorldCover data to analyze and visualize land cover distribution in the Hirmi Watershed.

## Features
- Land cover classification visualization
- Area calculation for different land cover types
- Export capabilities for further analysis
- Interactive legend and pie chart visualization

## Prerequisites
- Google Earth Engine account
- Access to ESA WorldCover dataset

## Setup
1. Clone this repository
2. Import the necessary assets into your GEE account
3. Update the `config.js` with your specific parameters

## Usage
1. Load the script in Google Earth Engine Code Editor
2. Update the geometry variable with your area of interest
3. Run the script to generate visualizations and exports
4. Check Tasks tab for exports

## Output
- CSV file with land cover areas
- GEE Asset with processed land cover data
- Interactive map with legend
- Pie chart showing land cover distribution

Land cover classification and visualization
Area calculation in hectares
Interactive legend and pie chart
Data export (CSV and GEE Asset)

Requirements

Google Earth Engine account
Access to ESA WorldCover dataset
Valid geometry for the area of interest


Contact
For questions or feedback, please open an issue in this repository.
