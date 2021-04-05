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
			res.innerHTML = operators(operatorButton, firstValue, secondValue);;
			return;
		}
	});

}

function operators(operator,a,b){
	switch(operator){
		case "+":
			return a + b;
			break;

		case "-":
			return a - b;
			break;

		case "*":
			return a * b;
			break;

		case "/":
			return a / b;
			break;

		 default:
        	console.log('default');
	}
}


