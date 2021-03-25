 function getCount(objects) {
    let exist = 0;

        for(let p in objects){
            if(objects[p].x == objects[p].y){
                exist++;
            }
        }
        
        if(exist > 0){
            return exist;
        }else{
            return exist;
        }
}


console.log(getCount(4,2,3,4,5,1,1));