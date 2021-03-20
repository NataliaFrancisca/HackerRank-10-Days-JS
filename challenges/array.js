//Array

function getSecondLargest(nums){

	let max = nums.reduce((a,b) => {
		return Math.max(a,b);
	});

	function removeMax(value) {
	  	return value < max;
	}

	let arrayNew = nums.filter(removeMax);
	
	let secondMax = arrayNew.reduce((a,b) => {
		return Math.max(a,b);
	});

	console.log(secondMax);

}

getSecondLargest([5,2,3,6,6,5]);