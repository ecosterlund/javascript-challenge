// from data.js
var tableData = data;

// Reference the table body
var tbody = d3.select("tbody");

// Display weather data from data.js
console.log(data);

// Building the UFO sighting Data Table 
function buildTable(data){
    tbody.html("")
    data.forEach(function(ufoData) {
        console.log(ufoData);
        var row = tbody.append("tr");
        Object.defineProperties(ufoData).forEach(function([key, value]){
            // Adding the data to each row
            var cell = row.append("td");
            cell.text(value);
        });

    })
}

//Call the function to build/add to the table
buildTable(tableData);