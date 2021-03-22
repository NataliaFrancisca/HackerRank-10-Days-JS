function isPositive(a){

    try{
        if(a > 0){
            return "YES";
        }if( a == 0 ){
            throw "Zero Error";
        }if( a < 0){
            throw "Negative Error";
        }
    }catch(err){
        return err;
    }
}

console.log(isPositive(2));
console.log(isPositive(0));
console.log(isPositive(-2));
