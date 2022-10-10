const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function (data) {
    let metaData = data.metadata;
    let sample = 960;
    let resultArray = metaData.filter(metaData => metaData.id == sample);
    console.log(resultArray);
    let resultAge = resultArray.map(resultArray => resultArray.age);
    console.log(resultAge);
    let resultBB= resultArray.map(resultArray => resultArray.bbtype);
    console.log(resultBB);
    let resultEthnic = resultArray.map(resultArray => resultArray.ethnicity);
    console.log(resultEthnic);
    let resultGender = resultArray.map(resultArray => resultArray.gender);
    console.log(resultGender);
    let resultLocation = resultArray.map(resultArray => resultArray.location);
    console.log(resultLocation);
    let resultWF = resultArray.map(resultArray => resultArray.wfreq);
    console.log(resultWF);

  
    let samples = data.samples;
    let sampleArray = samples.filter(samples => samples.id == sample);
    console.log(sampleArray);
    let samplesValues = sampleArray.map(sampleArray => sampleArray.sample_values);
    console.log(samplesValues);
    let samplesOTUID = sampleArray.map(sampleArray => sampleArray.otu_ids);
    console.log(samplesOTUID);
    let samplesOTUlabel = sampleArray.map(sampleArray => sampleArray.otu_labels);
    console.log(samplesOTUlabel);
  
});




function horizonPlot() {
    let trace1 = {
        x: samplesOTUID,
        y: samplesValues,
        text: samplesOTUlabel,
        name: "Horizontal Chart",
        type: "bar",
        orientation: "h"
    };
    let plotData = [trace1];
    let plotLayout = {
        title: "A Plotly plot",
        height: 600,
        width: 800
    };
    Plotly.newPlot("bar", plotData, plotLayout);

    let trace2 = {
        x: samplesOTUID,
        y: samplesValues,
        mode: 'markers',
        text: samplesOTUlabel,
        marker: {
          size: samplesValues,
          color: samplesOTUID,
        }
    };
    let plotData2 = [trace2];
    let plotLayout2 = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
    };
    Plotly.newPlot('bubble', plotData2, plotLayout2);
 }