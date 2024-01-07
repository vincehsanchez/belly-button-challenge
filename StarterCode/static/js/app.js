// lets use D3 library to read in "samples.json"
// but why do we have samples.json in the first place if we are using URL?
//BCS says that the json file is good practice and helpful if offline...
const bb_samples = 
"https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// Promise Pending
const dataPromise = d3.json(bb_samples);
console.log("Data Promise: ", dataPromise);
// Fetch the JSON data and console log it
d3.json(bb_samples).then(function(data) {
  console.log(data);
});
//data loaded, now we can make our chart

///////////////////
//fetch(bb_samples)
 //   .then((response) => response.json())
 //   .then((data) => {

///////////////////////

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

////////////////////
/////let barData = [{
   // x: Object.keys(venueCount),
   // y: Object.values(venueCount),
   // type: 'bar'
 // }];

 // Plotly.newPlot('myDivBar', barData, {
  //  title: 'Top 10 OTUs in Individuals'
 // });
////////////////////

////////////////////
// On change to the DOM, call getData()
//d3.selectAll("#selDataset").on("change", getData);

//}
/////////////////////

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