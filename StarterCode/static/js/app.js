// from data.js
var tableData = data;
var tbody = d3.selectAll("tbody");


function init() {
    fill_table(tableData);
};



// Add data to table
function fill_table(list) {
    data.forEach((list) => {
        var row = tbody.append("tr");
        Object.entries(list).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};



// Filter data

// buttons
var form = d3.select("#form");
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
    d3.selectAll("#tbody td").remove();
    // console.log('anything')
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // console.log(inputElement);
    // console.log('test');

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log(inputValue)

    var filteredData = data.filter(data => data.datetime === inputValue);  
    fill_table(filteredData);
};


init();