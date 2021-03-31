// My version without RegExp
function regexVarMy(word){

	let re = "";
	let worldSeparete = word.split("");
	let positionLastWord = worldSeparete.length - 1;

	if(worldSeparete[0] && worldSeparete[positionLastWord] === "a","e","i","o","u"){
		if(worldSeparete[0] === worldSeparete[positionLastWord]){
			re = "TRUE";
		}else{
			re = "FALSE";
		}
	}

	return re;
}

console.log(regexVarMy("afea"));

// The version with RegExp
function regexVar(word){
	const re = new RegExp(/^([aeiou]).+\1$/);
	let result = re.exec(word);

	return result
}

console.log(regexVar("afea"));