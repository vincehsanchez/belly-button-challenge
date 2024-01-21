// lets use D3 library to read in "samples.json"
// but why do we have samples.json in the first place if we are using URL?
//BCS says that the json file is good practice and helpful if offline...
// Initializes the page with a default plot
function init() {
// Call selected data
const dropdownMenu = d3.selectAll("#selDataset");//.on("change", updateParticipants);
//^..do not need .on(change", we have "optionchanged"!..for dropdown menu to work^
//cannot redeclare variables, and we know the numberIDs are the names lets make a name variable...
const bbData = 
"https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
// Fetch the JSON data and console log it
d3.json(bbData).then(function(data) {
  //lets get names
  const bbParticipants = data.metadata;//why red underline? parenthesis was missing..
  //^^changed to metadata because the info for each and not only names^^
  //get through each name
  bbParticipants.forEach(bbParticipantDemos =>{
    ///data.metadata.id if we need to get the BBID...bbParticipants.id...
    dropdownMenu.append("option")//option is the elemnt/item of one thing in dropdown menu.
    //^gave me something to click!!^^
    //https://d3js.org/d3-selection/modifying
                .text(bbParticipantDemos.id)//what wwe can click from
                //dropdown shows!! but no bbIDs yet...I was calling wrong variable!
                .attr("value", bbParticipantDemos.id);//holds/choice of bbID, but no text yet...works!
});//missing a semicolon
});//why does it not show? got it!! needed to "start" our function "init"
};
//inorder for our drop down to show each participant will use optionchanged that was provided.
// Use D3 to select the dropdown menu
function optionChanged(chosenParticipant) {
    //this helps us choose and change our selection!
    const bbData = 
    "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
    d3.json(bbData).then(function(data) {
      //fetching data
      const bbParticipants = data.metadata;
      const bbParticipantSamples = data.samples;
      //now we can use filter!
      const selectedParticipant = bbParticipants.filter(participant => participant.id == chosenParticipant);
      const selectedParticipantSample = bbParticipantSamples.filter(participantSample => participantSample.id == chosenParticipant);
      //now we tell function what to do..or call other function
      showDemographics(selectedParticipant[0])
      showUniqueSamples(selectedParticipantSample[0])//why does [0] make it show even when its another number?
      //^demos dont show..change to [0]..the array format makes us change how to pass object!
});
};//move brace here to make code sound
init(); //keep this here to make sure its running...
////////////////////////////////////////////////////////////////////////////////////////////////////
//lets get demographics
function showDemographics(selectedParticipant) {//using chosen participant value from function before
  const bbDemoInfoBody = d3.select("#sample-metadata");//where i want it to show
  //when we change participant, we clear whats there before
  bbDemoInfoBody.html("");
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  //we want all contents of selected pariticipant
  Object.entries(selectedParticipant).forEach(([key,value]) =>{//missing parenthesis
    //"Uncaught (in promise) TypeError: Cannot convert undefined or null to object"
    //^forgot to designate object!^
    //console.log(participant)//lets see why only "0" is showing
    //key and value for each participant
    //"option" to tell D3 we want it to add space for data to show
    bbDemoInfoBody.append("p").text(`${key}:${value}`);
    //^^changed "option" to "p" because we dont need another dropdown^^
    //nothing...wait! 0:[object Object]
  });
}//parenthesis removed here to make code sound
;//brace removed here to make code sound.
//nowww we can start counting for EACH person by finding the top 10 highest sample_values
//we can assume that there are no dulicate otu_ids...per BCS
function showUniqueSamples(selectedParticipantSample) {
  const bbSamples = d3.select("#bar");
  bbSamples.html("");
  //////Object.entries(selectedParticipantSample).forEach(([key,value]) =>{
    /////bbSamples.append("p").text(`${key}:${value}`);
    //^^do not need to use, want to plot once..not on every recuurance.^^
  //now we slice!
  const top10SampleValues = selectedParticipantSample.sample_values.slice(0,10).reverse();
  const top10SampleIDs = selectedParticipantSample.otu_ids.slice(0,10).reverse();
  //^adding reverse() because changing orientation changes the bar arrangement..^
  //const partOneIDs = Object.keys(top10SampleValues);
  //const moddySampleIDs = partOneIDs.map(id=>`OTU ${id}`);
  //^^two lines above put us in unwanted loop^^
  const moddySampleIDs = top10SampleIDs.map(id=>`OTU ${id}`);
  //here we want to modify x-alues and not have to jump between desc and asce (hope)..worked!
  console.log(top10SampleValues); //works!
  console.log(top10SampleIDs);
  console.log(moddySampleIDs);
  let barData = [{
    //need to fix rotation/orientation, y before x...
    //https://plotly.com/javascript/horizontal-bar-charts/
    y: moddySampleIDs,
    x: top10SampleValues,
    orientation: 'h',
    //^^we are not using forloop, remove "object.keys"^^
    type: 'bar'
 }];
//so close!! its in ascending order, i want it descending, assuming from orientation..
//quick save, need to keep reverse() in my pocket.
  Plotly.newPlot('bar', barData, {
    title: 'Top 10 OTUs in Individuals'
  });
  };//)} deleted to troubleshoot..
//barchart works!!
//lets get bubbling
//https://plotly.com/javascript/bubble-charts/
function showUniqueSamples(selectedParticipantSample) {
  const bbSamples = d3.select("#bubble");
  bbSamples.html("");
  //no slicing, we want all
  const bbSampleIDs = selectedParticipantSample.otu_ids;//xvalues and marker colors
  const bbSampleValues = selectedParticipantSample.sample_values;//yvalues and marker size
  const bbSampleLabels = selectedParticipantSample.otu_labels;//text values only
  //here we want to modify x-alues and not have to jump between desc and asce (hope)..worked!
  console.log(top10SampleValues); //works!
  console.log(top10SampleIDs);
  console.log(moddySampleIDs);
  let barData = [{
    //need to fix rotation/orientation, y before x...
    //https://plotly.com/javascript/horizontal-bar-charts/
    y: moddySampleIDs,
    x: top10SampleValues,
    orientation: 'h',
    //^^we are not using forloop, remove "object.keys"^^
    type: 'bar'
 }];
//so close!! its in ascending order, i want it descending, assuming from orientation..
//quick save, need to keep reverse() in my pocket.
  Plotly.newPlot('bar', barData, {
    title: 'Top 10 OTUs in Individuals'
  });
  };//)} deleted to troubleshoot..
const bbData = 
  "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
d3.json(bbData).then((data) =>{
//fetching data
const bbParticipantSamples = data.samples;
//i did need the stuff i deleted..thought it was a dead end...
const bbParticipants = data.names;
//metadata objects have 0 in front..names and samples have unique number..so do we use names for samples?
console.log(bbParticipantSamples)
console.log(bbParticipants)
//const selectedParticipantSample = data.samples.filter(sampleObj => sampleObj.id == selectedParticipantSample);
//console.log(selectedParticipantSample);
});

