//Need study more
function regexVar(w) {
    let re = (/\d+/g);
    let result = re.exec(w);

    return result;
}

console.log(regexVar("2000,21,10,12.5,1"));

