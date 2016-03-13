var table;

$('#test').click(function(){
	// var table = $('#transactions');
	// var data = parseTable(table);
	// console.log(data);
	table = parseTable();
	logTable(table, logSortedTable);
	
	
	

});

function logSortedTable(){
	table.sort(custom_sort);
	$.each(table, function(row, val){
		console.log(val);
	})
}

function logTable(table, callback){
	console.log("unsorted: ",table);
	callback();
}


function custom_sort(a, b) {
    return new Date(a.Date).getTime() - new Date(b.Date).getTime();
}
/*var your_array = [
    {lastUpdated: "2010/01/01"},
    {lastUpdated: "2009/01/01"},
    {lastUpdated: "2010/07/01"}
];

your_array.sort(custom_sort);*/