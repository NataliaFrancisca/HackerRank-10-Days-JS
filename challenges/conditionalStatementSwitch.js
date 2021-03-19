/*Conditional Statements: Switch*/
//Remember to use return

function getLetter(s){

	let firstValue = "";
	let theWord =  s.toLowerCase();

	for(let x = 0; x < theWord.length; x++){
		firstValue = theWord[0];
	}

switch (firstValue) {

    case "a": case"e": case"i": case"o": case "u":
        console.log('A');
        break;

    case "b": case"c": case"d": case"f": case"g": 
        console.log("B");
        break;

   	case "h": case"j": case"k": case"l": case"m": 
        console.log("C");
        break;

    case "n": case"p": case"q": case"r": case"s":
    case "t": case"v": case"w": case"x": case"y": case"z": 
   		console.log("D");
   		break;

    default:
        console.log('default');
	}

}


getLetter("FAMA");



