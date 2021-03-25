//Create a Retangle Object

function Rectangle(a,b){

	let length = a;
    let width = b;
    let perimeter = 2 * (a + b);
    let area = a * b;

    let result = {
        length,
        width,
        perimeter,
        area,
    }
    
    return result;

}

console.log(Rectangle(4,5));