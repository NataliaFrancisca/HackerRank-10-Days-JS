let numbers = [1,2,3,4,5,6];

let result = numbers.map(whatIs);

function whatIs(element){
	if(element % 2 == 0){
		return element * 2;
	}else{
		return element * 3;
	}
}

console.log(result);