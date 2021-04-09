let buttons = [...document.getElementsByTagName("button")];
let res = document.getElementById("res");

let firstValue = 0;
let secondValue = 0;
let operatorButton = "";

for(let x = 0; x < buttons.length; x++){

	buttons[x].addEventListener("click", () => {

		res.innerHTML += buttons[x].innerHTML;

		if(buttons[x].innerHTML === "C"){
			res.innerHTML = "";
			return;
		}

		if(buttons[x].innerHTML === "+" || buttons[x].innerHTML === "-" ||
			buttons[x].innerHTML === "*" || buttons[x].innerHTML === "/"){

			firstValue = parseInt(res.innerHTML);
			operatorButton = buttons[x].innerHTML;
			res.innerHTML = "";
			return;
		}

		if(buttons[x].innerHTML === "="){
			secondValue = parseInt(res.innerHTML);
			let operatorBinary = operators(operatorButton, firstValue, secondValue);
			console.log(operatorBinary);
			res.innerHTML = needZeros(operatorBinary);
			console.log(needZeros(operatorBinary));
			return;
		}
	});

}

function operators(operator,a,b){

	const valueOne = parseInt(a, 2);
	const valueTwo = parseInt(b, 2);

	let result = 0;

	switch(operator){
		case "+":
			result = valueOne + valueTwo;
			break;

		case "-":
			result = valueOne - valueTwo;
			break;

		case "*":
			result = valueOne * valueTwo;
			break;

		case "/":
			result = valueOne / valueTwo;
			break;

		 default:
        	console.log('default');
	}

	return result.toString(2);

}

let separateBinary = [];

function needZeros(binaryNumber){

	if(binaryNumber.length < 4){
		return addZero(binaryNumber);
	}else{
		return binaryNumber;
	}
}


function addZero(addBinaryNumber){

	let numberDivide = addBinaryNumber.split("");

		for(let p in numberDivide){
			separateBinary.push(numberDivide[p]);
		}

	console.log(separateBinary);
	console.log(separateBinary.length);

	while (separateBinary.length < 4) {
		separateBinary.unshift("0");
	}

	let result = separateBinary.join('');

	return result;
}







