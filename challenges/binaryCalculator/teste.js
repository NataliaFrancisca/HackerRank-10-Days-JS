//FUNÇÃO QUE VAI RETORNAR A SOMA DOS NÚMEROS EM BINÁRIO

function op(s, v1, v2) {
    const v1Number = parseInt(v1, 2);
    const v2Number = parseInt(v2, 2);

    var result = 0;
    switch (s) {
    case '+':
        result = v1Number + v2Number;
        break;
    case '-':
        result = v1Number - v2Number;
        break;
    case '*':
        result = v1Number * v2Number;
        break;
    case '/':
        result = v1Number / v2Number;
        break;
    case '%':
        result = v1Number % v2Number;
        break;
    }
   /* console.log(result); // só mostra o número calculado em decimal
    console.log(result.toString(2)); //mostra o número calculado em binário, mas sem os zeros*/

    return result.toString(2);
}


let number = op('+', '0101', '0101');

let array = [];


function teste(teste){

	if(teste.length < 4){
		return addZero(teste);
	}else{
		return teste;
	}

}

console.log(teste(number));


function addZero(teste){


	let numberDivide = teste.split("");

		for(let p in numberDivide){
			array.push(numberDivide[p]);
		}

	console.log(array);
	console.log(array.length);

	while (array.length < 4) {
		array.unshift("0");
	}

	let result = array.join('');

	return result;
}






/*128 64 32 16 8 4 2 1*/

// 1 = 0001*/
// 2 = 0010
// 3 = 0011
// 4 = 0100
// 5 = 0101
// 6 = 0110
// 7 = 0111

///// A partir desse não precisa acresentar o zero

/*8 = 1000
9 = 1001
10 = 1010
11 = 1011
12 = 1100
13 = 1101
14 = 1110
15 = 1111
16 = 10000
*/

