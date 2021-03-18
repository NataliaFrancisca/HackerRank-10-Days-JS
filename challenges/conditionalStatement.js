//Conditional Statement: IF-ELSE....

function note(score){

	if(score > 0 && score < 5){
		return 'F';
	}if(score >= 5 && score < 10){
		return 'E';
	}if(score >= 10 && score < 15){
		return 'D';
	}if(score >= 15 && score < 20){
		return 'C';
	}if(score >= 20 && score < 25){
		return 'B';
	}if(score >= 25 && score <= 30){
		return 'A';
	}
}


console.log(note(3));