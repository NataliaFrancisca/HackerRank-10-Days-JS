function sides(literals, ...expressions) {
   	
   const [a, p] = expressions;

   let area = a * p;
   let perimeter = 2 * (a + p);

   const value = Math.sqrt((Math.pow(perimeter, 2)  - (16 * area)));

   return [((perimeter - value) / 4), ((perimeter + value) / 4)];
}


console.log(sides("The expression", 14,10))