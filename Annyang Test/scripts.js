/**
 * @author Kris
 */


$(function(){
	$('#test').click(function(){
		console.log(annyang);
	
		if (annyang) {
		  // Let's define a command.
		  var commands = {
		    'hello': function() { alert('Hello world!'); }
		  };
		  var commands2 = {'hi': () => {console.log('hi there');}};

		  // Add our commands to annyang
		  annyang.addCommands(commands);
		  annyang.init(commands2, false);

		  // Start listening.
		  annyang.start();
		}
	})
})

function hellFunction(){
	console.log('hi there');
}