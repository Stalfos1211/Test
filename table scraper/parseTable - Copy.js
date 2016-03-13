// /**
//  * converts array-like object to array
//  * @param  collection the object to be converted
//  * @return {Array} the converted object
//  */
// function arrayify(collection) {
//   return Array.prototype.slice.call(collection);
// }

// /**
//  * generates factory functions to convert table rows to objects,
//  * based on the titles in the table's <thead>
//  * @param  {Array[String]} headings the values of the table's <thead>
//  * @return {Function}      a function that takes a table row and spits out an object
//  */
// function factory(headings) {
//   return function(row) {
//     return arrayify(row.cells).reduce(function(prev, curr, i) {
//       prev[headings[i]] = curr.innerText;
//       return prev;
//     }, {});
//   }
// }

// /**
//  * given a table, generate an array of objects.
//  * each object corresponds to a row in the table.
//  * each object's key/value pairs correspond to a column's heading and the row's value for that column
//  * 
//  * @param  {HTMLTableElement} table the table to convert
//  * @return {Array[Object]}       array of objects representing each row in the table
//  */
// function parseTable(table) {
//   var headings = arrayify(table.tHead.rows[0].cells).map(function(heading) {
//     console.log(headings);
//     return heading.innerText;
//   });
//   return arrayify(table.tBodies[0].rows).map(factory(headings));
// }

function parseTable(){
var tbl = $('#transactions').map(function(n, v) {

    var $tr = $('tr', this);
    var $td =  $('td', this);

    // check table format to get number of columns 
    if ($('tr:first td', this).length < 1){
      // first row is th
      var numberOfColumns = $('tr:first th', this).length;
    } else
    {
      // first row is td
      var numberOfColumns = $('tr:first td', this);
    }

    var numberOfRows = $('tr', this).length -1;
    //console.log($('th').eq(0).text(), this);

    var parsedTable = [];
    for (var i = 0; i < numberOfColumns; i++)
    {
      for (var j = 0; j < numberOfRows; j++)
      {
        //console.log($('th', this).eq(i).text());
        //console.log($td.eq(j).text() + j);
        parsedTable.push($tr.eq(i).text() + ":" + $td.eq(j).text());
      }
    }

    return parsedTable;

    // return {
    //          id: ++i,
    //          name: $td.eq(0).text(),
    //          age: $td.eq(1).text(),
    //          grade: $td.eq(2).text()               
    //        }
}).get();

console.log(tbl);
}

/*var testObj = {test: "test"};
console.log(testObj.test)*/