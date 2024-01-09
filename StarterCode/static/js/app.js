// Initializes the page with a default plot
function init() {
// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);
}
//^^we need to make dropdown function first^^ 
// lets use D3 library to read in "samples.json"
// but why do we have samples.json in the first place if we are using URL?
//BCS says that the json file is good practice and helpful if offline...
const bbSamples = 
"https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// Fetch the JSON data and console log it
d3.json(bbSamples).then(function(data) {
  console.log(data);
//data loaded, we still need to fetch what we need from it to use for charts
/////////lets get the samples printed atleast///////
const bbSamplesArray = data.samples;//
console.log(bbSamplesArray);//works!!//
/////////////////////////////////////////////////////
//what are the sample_values?? are they IDs? i dont think I can count numbers unless they are unique...
//BCS says that we need to count the top 10 of each person...so we need to clean up more...
const testSample = 940;
let bbResultArray = data.samples.filter(sampleObj => sampleObj.id == testSample);
let bbResult = bbResultArray[0];
console.log(bbResult);//works!
//lets get an array for each person...dont neeed to, bbSamplesArray already does...
//let bbResultArrays = data.samples.filter(sampleObj => sampleObj.id <= 1601); //sugggested by BCS
  //^^"sample" not defined for some reason...^^..maybe needs a list or function first!
//let bbResults = bbResultArrays;//suggested by BCS
//console.log(bbResults);//suggested by BCS
////////////////////^^bbSamplesArray already does...^^
//nowww we can start counting for EACH person by finding the top 10 highest sample_values
//I think we can assume that there are no dulicate otu_ids...
//function countUniqueSamples(bbSamplesArray) {
 // const sampleValueCount = {};
  //bbSamplesArray.sample_values.forEach(sample_values =>{
    //for now we will assume we are counting unique sample values
   // if (countUniqueSamples[])
 // })
  //return sampleIds.age < 30;
//}
});
//function letsGetEachArray(sample) {
//d3.json(bbSamples).then((data) => { //vscode expected "=>"
//let bbResultArrays = data.samples.filter(sampleObj => sampleObj.id == sample); //sugggested by BCS
  //^^"sample" not defined for some reason...^^..maybe needs a list or function first!
//let bbResults = bbResultArrays[0];//suggested by BCS
//console.log(bbResults);//suggested by BCS
  //});//d3 brace and "then" parenthesis
//};//for lgea function




//fetch(bb_samples)
  // .then((response) => response.json())
   //.then((data) => {

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