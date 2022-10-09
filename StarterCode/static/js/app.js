const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function (data) {
    console.log(data);
    let metaData = (data.metadata);
    for (let i = 0; i < metaData.length; i++){
        row = metaData[i];
        participants.push(row);

    }
    console.log(participants)
    let allBact = (data.samples);
    for (let i = 0; i < allBact.length; i++){
        row = allBact[i];
        bacteria.push(row);
    }
    console.log(bacteria)
    let allName = (data.names);
    for (let i = 0; i < allName.length; i++){
        row = allName[i];
        nameID.push(row);
    }
    console.log(nameID);
});


let participants = []
console.log(participants[2])
let bacteria = []
console.log(bacteria[2])
let nameID = [] 
console.log(nameID[2])

d3.json(url).then(function (data) {
    console.log(bacteria)
    let allName = (data.names);
    for (let i = 0; i < allName.length; i++){
        row = allName[i];
        nameID.push(row);
        let j = Object.values(row)
        if j = '254' {   
        }
    }
    console.log(nameID);
    console.log(data);
    let metaData = (data.metadata);
    for (let i = 0; i < metaData.length; i++){
        row = metaData[i];
        participants.push(row);

    }
    console.log(participants)
    let allBact = (data.samples);
    for (let i = 0; i < allBact.length; i++){
        row = allBact[i];
        bacteria.push(row);
    }
});


// function horizonPlot() {
//     let trace1 = {
//         x: otu_ids,
//         y: sample_values,
//         text: otu_labels,
//         name: "Horizontal Chart",
//         type: "bar",
//         orientation: "h"
//     };
//     let data = [trace1];
//     let layout = {
//         title: "A Plotly plot",
//         height: 600,
//         width: 800
//     };
//     Plotly.newPlot("bar", data, layout);
//     }


// function bubblePlot() {
//     let trace1 = {
//         x: otu_ids,
//         y: sample_values,
//         mode: 'markers',
//         text: otu_labels,
//         marker: {
//           size: sample_values,
//           color: otu_ids,
//         }
//     };
//     let data = [trace1];
//     let layout = {
//     title: 'Marker Size',
//     showlegend: false,
//     height: 600,
//     width: 600
//     };
//     Plotly.newPlot('bubble', data, layout);
// }