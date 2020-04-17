$ (document).ready( function(){

$('.calc-btn').on('click', function(event){
event.preventDefault();


var numberOne,
	numberTwo,
	amount,
	area,
	generation,
	income;



numberOne = parseInt( $('#power').val());
numberTwo = parseInt( $('#consumption').val());

if (isNaN(numberOne)){
	numberOne = 0;


}

if (isNaN(numberTwo)){
	numberTwo = 0;


}

amount = (numberOne * 3);
area = (numberOne * 6);
generation = (numberOne * 1100);
income = (numberOne * 143 - numberTwo);


$ ('.amount').text(amount);
$ ('.area').text(area);
$ ('.generation').text(generation);
$ ('.income').text(income);


	});

});