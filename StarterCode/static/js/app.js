// Create an array of each country's numbers
//let australia = Object.values(data.australia);
//let brazil = Object.values(data.brazil);
//let uk = Object.values(data.uk);
////let mexico = Object.values(data.mexico);
//let singapore = Object.values(data.singapore);
//let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
///let labels = Object.keys(data.australia);

// lets use D3 library to read in "samples.json"
// but why do we have samples.json in the first place if we are using URL?
const bb_samples_url = 
"https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";function init() {
d3.json(bb_samples_url, function (json) {
    //https://stackoverflow.com/questions/22325819/d3-js-get-json-from-url
});

fetch(dcShowsData)
    .then((response) => response.json())
    .then((data) => {
//let data = [{
    //values: australia,
    //labels: labels,
    //type: "pie"
  //}];

  //let layout = {
    //height: 600,
    //width: 800
  //};

  //Plotly.newPlot("pie", data, layout);
//}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

}
////here i think we can make the "horizontal bar chart with a dropdown menu...
//... to display the top 10 OTUs found in that individual" 
//// Function called by DOM changes
//function getData() {
 // let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  //let dataset = dropdownMenu.property("value");
  //// Initialize an empty array for the country's data
  //let data = [];

  //if (dataset == 'australia') {
    //  data = australia;
  //}
  //else if (dataset == 'brazil') {
    //  data = brazil;
  //}
  //else if (dataset == 'uk') {
      //data = uk;
  //}
  //else if (dataset == 'mexico') {
   // data = mexico;
  //}
  //else if (dataset == 'singapore') {
      //data = singapore;
  //}
  //else if (dataset == 'southAfrica') {
    //data = southAfrica;
  //}
//// Call function to update the chart
  //updatePlotly(data);
//}

//// Update the restyled plot's values
//function updatePlotly(newdata) {
  //Plotly.restyle("pie", "values", [newdata]);
//}

//init();