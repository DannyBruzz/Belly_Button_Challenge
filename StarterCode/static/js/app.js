const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// d3.selectAll("#selDataset").on("change", optionChanged);

// function optionChanged() {
//     let dropdownMenu = d3.select("#selDataset");
//     let selected = dropdownMenu.property("value");
//     d3.json(url).then(function (data) {
//         for (i = 0; i < nameData.length; i++){
//             let nameData = data.names;
//             row = nameData[i];
//             console.log(Object.values(row));
//         }})
// };
   
// d3.json(url).then(function (data) {
//     let nameData = data.names;
//     let nameList = [];
//     for (i = 0; i < nameData.length; i++){
//         row = nameData[i];
//         nameList.push(row);
// }
// console.log(nameList)}
// )

// d3.selectAll("#selDataset").on("change", optionChanged);

d3.json(url).then(function (data) {
    let nameData = data.names;
    let nameList = [];
    for (i = 0; i < nameData.length; i++){
        row = nameData[i];
        nameList.push(row);
}
    for (i = 0; i < nameList.length; i++){
        item = nameList[i];
        let PANEL = d3.select("#selDataset")
        PANEL.append("option").text(item);
}}
)



// function getData() {
//     d3.json(url).then(function (data) {
//         let metaData = data.metadata;
//         let sample = 960;
//         let resultArray = metaData.filter(metaData => metaData.id == sample);
//         console.log(resultArray);
//         let resultAge = resultArray.map(resultArray => resultArray.age);
//         console.log(resultAge);
//         let resultBB= resultArray.map(resultArray => resultArray.bbtype);
//         console.log(resultBB);
//         let resultEthnic = resultArray.map(resultArray => resultArray.ethnicity);
//         console.log(resultEthnic);
//         let resultGender = resultArray.map(resultArray => resultArray.gender);
//         console.log(resultGender);
//         let resultLocation = resultArray.map(resultArray => resultArray.location);
//         console.log(resultLocation);
//         let resultWF = resultArray.map(resultArray => resultArray.wfreq);
//         console.log(resultWF);

    
//         let samples = data.samples;
//         let sampleArray = samples.filter(samples => samples.id == sample);
//         console.log(sampleArray);
//         let samplesValues = sampleArray.map(sampleArray => sampleArray.sample_values);
//         console.log(samplesValues);
//         let samplesOTUID = sampleArray.map(sampleArray => sampleArray.otu_ids);
//         console.log(samplesOTUID);
//         let samplesOTUlabel = sampleArray.map(sampleArray => sampleArray.otu_labels);
//         console.log(samplesOTUlabel);

//     }
//     );
// }




// function horizonPlot() {
//     let trace1 = {
//         x: samplesOTUID,
//         y: samplesValues,
//         text: samplesOTUlabel,
//         name: "Horizontal Chart",
//         type: "bar",
//         orientation: "h"
//     };
//     let plotData = [trace1];
//     let plotLayout = {
//         title: "A Plotly plot",
//         height: 600,
//         width: 800
//     };
//     Plotly.newPlot("bar", plotData, plotLayout);
// }
// function bubblePlot() {
//     let trace1 = {
//         x: samplesOTUID,
//         y: samplesValues,
//         mode: 'markers',
//         text: samplesOTUlabel,
//         marker: {
//           size: samplesValues,
//           color: samplesOTUID,
//         }
//     };
//     let plotData = [trace1];
//     let plotLayout = {
//     title: 'Marker Size',
//     showlegend: false,
//     height: 600,
//     width: 600
//     };
//     Plotly.newPlot('bubble', plotData, plotLayout);
//  }