// Align code ()
// import data from data.js
// const cannpt be reapplied or reassigned
const tableData = data; //variable is tableData, assigned to data

// Reference HTML table using D3
var tbody = d3.select("tbody"); 

// Bulding a table
function buildTable(data){

}

// build then clear data to make room for table with data
function.buildTable(data){
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






























