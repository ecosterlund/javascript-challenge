// from data.js
var tableData = data;

// Reference the table body
var tbody = d3.select("tbody");

// Display UFO sightings data from data.js
console.log(data);

// Building the UFO sighting Data Table 
function buildTable(data){
    // Clear Table
    tbody.html("")
    // Function to add data to each row
    data.forEach(function(ufoData) {
        //Printing data
        console.log(ufoData);
        //Defining row to append to
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]){
            // Adding the data to each row
            var cell = row.append("td");
            cell.text(value);
        });
    })
}

// Reference button for filtering data 
var button =d3.select("#filter-btn");

button.on("click", function() {
    // Clear table
    tbody.html("");

    // Define where to grab each value for user input
    var inputDateTime = d3.select("#datetime").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputShape = d3.select("#shape").property("value");
    var filteredData =tableData;

    // If statements to filter the data
    if (inputDateTime) {
        filteredData = filteredData.filter(x => x.datetime === inputDateTime);
    }
    if (inputCountry) {
        filteredData = filteredData.filter(x => x.country === inputCountry);
    }
    if (inputState) {
        filteredData = filteredData.filter(x => x.state === inputState);
    }
    if (inputCity) {
        filteredData = filteredData.filter(x => x.city === inputCity);
    }
    if (inputShape) {
        filteredData = filteredData.filter(x => x.shape === inputShape);
    }

    //Make table with filtered data
    filteredData.forEach(function(ufoData) {
        console.log(ufoData);
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
      });
  });

//Call the function to build/add to the table
buildTable(tableData);