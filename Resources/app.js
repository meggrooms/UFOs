// Align code ()
// import data from data.js
const tableData = data; //variable is tableData, assigned to data

// Reference HTML table using D3
var tbody = d3.select("tbody"); 

// Bulding a table
function buildTable(data){

}

//clear data to make room for table with data
function.buildTable(data){
    tbody.html(" ");

}


//start loop on data - cleaner to read with =>
data.forEach((dataRow) => {          //variable => {}
    let row = tbody.append("tr");       //make a row (tbody is appended to add a "tr")  
    Object.values(dataRow).forEach((val) => {    // start code (obj), ref one obj of array
      let cell = row.append("td");     //append value of obj to cell
      cell.text(val);      //append data into td
      }
    );
  });































