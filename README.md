# belly-button-challenge

Build an interactive dashboard to explore the Belly Button Biodiversity dataset Links to an external site which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

**Instructions**
1. Download json file, html file, and js file.


### What are we doing?

1. Use the D3 library to read in samples.json from the URL:
https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
3. Use sample_values as the values for the bar chart.
4. Use otu_ids as the labels for the bar chart.
5. Use otu_labels as the hovertext for the chart.
6. Update all the plots when a new sample is selected.
7. Deploy your app to a free static page hosting service, such as GitHub Pages.

## How are we showing it?

**Bar Chart**

Create a bubble chart that displays each sample.
Use otu_ids for the x values.
Use sample_values for the y values.
Use sample_values for the marker size.
Use otu_ids for the marker colors.
Use otu_labels for the text values.

**Bubble Chart**

Display the sample metadata, i.e., an individual's demographic information.
Display each key-value pair from the metadata JSON object somewhere on the page.


