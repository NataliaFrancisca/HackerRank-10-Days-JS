function getMaxLessThanK(n, k) {
    let max = 0;

    for (let a = 1; a <= n; a++) {

        for (let b = a + 1; b <= n; b++) {
            let bw = (a & b);
            (bw < k && bw > max) && (max = bw);
        }
    }
 
    return max;
}

//o número que mais aparece entre os dois valores

console.log(getMaxLessThanK(10,5));
console.log(getMaxLessThanK(8,5));
console.log(getMaxLessThanK(2,2));