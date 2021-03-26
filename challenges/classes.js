//Classes

class Polygon{
	constructor(value){
		this.value = value;
	}

	perimeter() {
		let result = 0;

		for(let p in this.value){
			result += this.value[p];
		}

    	return result;
  }


}

let triangle = new Polygon([5,5,5]);
console.log(triangle.perimeter());

