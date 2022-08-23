// create init function 
function init(){
    buildPlot()
}

function optionChanged() {
  
    
    buildPlot();
  }



function buildPlot(){


    d3.json("samples.json").then((data) =>{
        
        var idValues = data.names;
  
        // dropdown menu
        idValues.forEach(id => d3.select('#selDataset').append('option').text(id).property("value", id));


        // select current ID
        var currentID = d3.selectAll("#selDataset").node().value;
     

        //filter 
        filteredID = data.samples.filter(entry => entry.id == currentID);

        // create horizontal bar chart
        var trace1 = {
            x: filteredID[0].sample_values.slice(0,10).reverse(),
            y: filteredID[0].otu_ids.slice(0, 10).reverse().map(int => "OTU " + int.toString()),
            text: filteredID[0].otu_labels.slice(0,10).reverse(),
            type:"bar",
            orientation: 'h'

        };
    
      
        
        var dataPlot = [trace1];

        // Layout
        var layout = {
            title : 'Top 10 OTU samples',
            margin: {
                l: 75,
                r: 100,
                t: 60,
                b: 60
            }

        };

        // create new bar
        Plotly.newPlot("bar", dataPlot, layout);

        // Create bubble chart
        var trace2 ={
            x : filteredID[0].otu_ids,
            y : filteredID[0].sample_values,
            text : filteredID[0].otu_labels,
            mode : 'markers',
            marker: {
                color : filteredID[0].otu_ids,
                size : filteredID[0].sample_values
            }
        }

        var data2 = [trace2]

        //layout
        var layout2 = {
            title : 'Marker Size',
            showlegend : false, 
        }

        //create new plot
        Plotly.newPlot('bubble', data2, layout2)
        console.log(filteredID)
        gauge()
    });
};

//run init to  set the main page
init();
