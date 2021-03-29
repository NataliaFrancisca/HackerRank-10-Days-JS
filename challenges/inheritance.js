class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

}

Rectangle.prototype.area = function() {
	return this.w * this.h;
}

class Square extends Rectangle{
    constructor(w){
        super(w, w);
    }
}

const rec = new Rectangle(3,4);
const seq = new Square(3);

console.log(rec.area());
console.log(seq.area());
