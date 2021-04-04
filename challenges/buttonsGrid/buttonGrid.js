let buttons = document.getElementsByTagName("button");
let btnFive = document.getElementById("btn5");

let initialArray = [
	[1,2,3],[4,5,6],[7,8,9]
];
	
let theEmptyArray = [	
	[],[],[]
];

btnFive.addEventListener("click", () => {

		theEmptyArray[0].push(initialArray[1][0]);
		theEmptyArray[1].push(initialArray[2][0]);
		theEmptyArray[2].push(initialArray[2][1]);

		theEmptyArray[0].push(initialArray[0][0]);
		theEmptyArray[1].push(initialArray[1][1]);
		theEmptyArray[2].push(initialArray[2][2]);

		theEmptyArray[0].push(initialArray[0][1]);
		theEmptyArray[1].push(initialArray[0][2]);
		theEmptyArray[2].push(initialArray[1][2]);

			for(let p in theEmptyArray){
				initialArray[p] = theEmptyArray[p];
			}

		emptyArray();

		let separateArray = [];

			for(let x in initialArray){
				separateArray.push(initialArray[x][0]);
				separateArray.push(initialArray[x][1]);
				separateArray.push(initialArray[x][2]);
			}

			for(let p in separateArray){
				buttons[p].innerHTML = separateArray[p];	
			}
});


function emptyArray(){
	for(let p in theEmptyArray){
		theEmptyArray[p] = [];
	}	
}



