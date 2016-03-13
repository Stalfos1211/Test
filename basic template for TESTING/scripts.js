/**
 * @author Kris
 */

 var logElement;
 var testVar;

// document ready shorthand
$(function(){

	logElement = $('#log');
	// Fat arrow function (shorthand for anonymous function)
	$('#test').click(() => {
		log();
	})

});

/*function log(){
	logElement.html('TEST WORKING');
}*/

var log = testVar => { logElement.html('TEST WORKING'); }