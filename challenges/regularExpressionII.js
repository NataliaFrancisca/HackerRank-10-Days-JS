//Mr., Mrs., Ms., Dr., or Er.

function regexVar(word){
	const re = new RegExp(/^([Mr|Mrs|Ms|Dr|Er])+[.]/g);
	let result = re.exec(word);

	return result
}

console.log(regexVar("Mrs. Maria, wellcome"));
console.log(regexVar("Mrs . Maria, wellcome"));