/**
 * @author Kris
 */


var editorSelector = document.getElementById('codemirror-container');

var editor = CodeMirror(editorSelector, {
	value: "function myScript(){return 100;}\n",
  	mode:  "javascript",
  	theme: 'ambiance',
  	stylesheet: "css/CodeMirror.css",
    lineNumbers: true
});

$(function () {
    $("#codemirror-container").resizable();
});