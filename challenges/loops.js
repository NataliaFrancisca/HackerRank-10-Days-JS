//Loops

function vowelsAndConsonants(s){

	let vowels = "";
	let consonants  = "";

	for(let i = 0; i < s.length; i++){

		switch(s[i]){

			case "a":case "e":case "i":case "o":case "u":
			vowels += s[i];
			break;

			default:
				consonants += s[i];
		}

	}

	for(let x in vowels){
		console.log(vowels[x]);
	}

	console.log("\n")

	for(let y in consonants ){

		console.log(consonants[y]);
	}

}

vowelsAndConsonants("hellohowareyou");

