# Belly Button Biodiversity

In this project, I buildt an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

This the final dashboard: https://afiaella.github.io/PLOTLY-HOMEWORK/

## STEPS

To build the Dashboard I completed the following steps:

1. Used the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * Used `sample_values` as the values for the bar chart.

  * Used `otu_ids` as the labels for the bar chart.

  * Used `otu_labels` as the hovertext for the chart.
  
<img width="346" alt="image" src="https://user-images.githubusercontent.com/85926823/193126820-22b7074c-d709-420f-a88e-f304df9f97c7.png">


3. Created a bubble chart that displays each sample.

  * Used `otu_ids` for the x values.

  * Used `sample_values` for the y values.

  * Used `sample_values` for the marker size.

  * Used `otu_ids` for the marker colors.

  * Used `otu_labels` for the text values.
 
 <img width="855" alt="image" src="https://user-images.githubusercontent.com/85926823/193126645-36cb94f1-c01f-4b4d-8137-b9267af11571.png">



4. Deployed my app to a free static page on GitHub Pages. 





