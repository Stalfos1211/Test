var myRows = [];
var headersText = [];
var $headers = $("th");

// Loop through grabbing everything
var $rows = $("tbody tr").each(function(index) {
  $cells = $(this).find("td");
  myRows[index] = {};

  $cells.each(function(cellIndex) {
    // Set the header text
    if(headersText[cellIndex] === undefined) {
      headersText[cellIndex] = $($headers[cellIndex]).text();
    }
    // Update the row object with the header/cell combo
    myRows[index][headersText[cellIndex]] = $(this).text();
  });    
});

// Let's put this in the object like you want and convert to JSON (Note: jQuery will also do this for you on the Ajax request)
var myObj = {
    "myrows": myRows
};

function parseTable() {
        var myRows = [];
        var headersText = [];
        var $headers = $("th");

        // Loop through grabbing everything
        var $rows = $("tbody tr");
        var totalRows = $rows.length;
    
    for (var rowIndex = 0; rowIndex < totalRows; ++rowIndex) {
      var currentRow = $($rows[rowIndex]);
          var $cells = currentRow.find("td");
          myRows[rowIndex] = {};
      var totalCells = $cells.length;

          for (var cellIndex = 0; cellIndex < totalCells; ++cellIndex) {
        var currentCell = $($cells[cellIndex]);
            // Set the header text
            if(headersText[cellIndex] === undefined) {
              headersText[cellIndex] = $($headers[cellIndex]).text();
            }
            // Update the row object with the header/cell combo
            myRows[rowIndex][headersText[cellIndex]] = currentCell.text();
          }    
        }

        // Let's put this in the object like you want and convert to JSON (Note: jQuery will also do this for you on the Ajax request)
        var myObj = {
            "myrows": myRows
        };
        //console.log(myObj);
        return myRows;
}

// parseTable();