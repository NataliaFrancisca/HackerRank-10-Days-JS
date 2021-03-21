function reverseString(s){

	let res = "";
	try{
		if(typeof s == "number"){
			throw "s.split is not a function";
		}else{

			let worldNew = s.split("");
	
			worldNew.reverse();
			res = worldNew.join('');
		}

		console.log(res);

	}catch(err){
		console.log(err);
		console.log(s);
	}
}

reverseString(1234);
reverseString("1234");
