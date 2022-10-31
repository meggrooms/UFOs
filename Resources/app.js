// Align code ()
// import data from data.js
// const cannpt be reapplied or reassigned
const tableData = data; //variable is tableData, assigned to data

// Reference HTML table using D3
var tbody = d3.select('tbody'); 

// Bulding a table
function buildTable(data){


// build then clear data to make room for table with data
function buildTable(data){
    tbody.html(" ");

}
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");   // adds table row to table

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {  // start code (obj), ref one obj of array
      let cell = row.append("td"); //append value of obj to cell
      cell.text(val);   // //append TEXT data into td
      }
    );
  });
} 

// ---------11.5.3  FILTERS ----------
// function handleClick() {
//   // Grab the datetime value from the filter
//   let date = d3.select("#datetime").property("value");
//   let filteredData = tableData;
// };
  // select 1st match wiht str "#datetime"
  // d3 look for #datetime in html
  // property("value"); - tells d3 look for info & store in "date" vari
 

// ----------11.5.4 IF statement --------
// IF statement syntax
// if (condition) { code to execute }

// psuedo-code"
// if (a date is entered) { filter 
  //the default data to show only the date entered
// };

// if (date) {
//   filteredData = filteredData.filter(row => row.datetime === date);
// };           // apply filter method to match the datetime to the filtered date


// call function to buid table with flter in place


function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);













