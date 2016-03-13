/**
 * @author Kris
 */

 var logElement;
 var testVar;

 var accounts = [
 	{ amount: 1, active: 'active'},
 	{ amount: 1, active: 'active'},
 	{ amount: 6, active: 'inactive'},
 	{ amount: 1, active: 'active'},
 	{ amount: 3, active: 'inactive'},
 	{ amount: 1, active: 'active'},
 	{ amount: 1, active: 'active'}
 ]

var isActive = accounts => accounts.active === 'active';

var activeAccounts = accounts.filter(isActive);
//var otherAccounts = account.reject(isActive);

$(function(){

	logElement = $('#log');

	$('#test').click(() => { console.log(getTotal(accounts)) });

});

function getTotal(varAccounts) {
	return varAccounts.reduce( (prev, curr) => prev + curr.amount, 0 );
}

// function getTotal (varAccount) {
// 	var total = Object.keys(varAccount).reduce(function(a, b){
// 		return a + varAccount[b].amount;
// 	},0);
// 	return total;
// }