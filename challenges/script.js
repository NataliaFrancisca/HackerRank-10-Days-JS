//Throw

function isPositive(a){

		try{
			if(a == 0){
				throw "Zero Error";
			}else if(a < 0){
				throw "Negative Error";
			}else{
				console.log("YES");
			}

		}catch(err){
			console.log(err);
		}
}

isPositive(-20);
isPositive(20);
isPositive(0);
isPositive(1);
