// from data.js
var tableData = data;

// Reference the table body
var tbody = d3.select("tbody");

// Display UFO data from data.js
console.log(data);

// Building the UFO sighting Data Table 
function buildTable(data){
    tbody.html("")
    data.forEach(function(ufoData) {
        console.log(ufoData);
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]){
            // Adding the data to each row
            var cell = row.append("td");
            cell.text(value);
        });
    })
}

// Click function for filtering data by entered date
function runClick(){
    // Defining Variables to be used in this function
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    // If statement for sorting the data
    if(date){
        filterData = filterData.filter(x => x.datetime === date);
    }
    // Displaying the filtered dataset
    console.log(filterData);
    buildTable(filterData);
}
// Making the filter button run the click command
d3.select("#filter-btn").on("click", runClick);

//Call the function to build/add to the table
buildTable(tableData);