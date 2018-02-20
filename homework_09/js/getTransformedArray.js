/* 
let a = [2, 4, 6, 8, 9, 15]

function transform(a) {
    let b = ['4', '16', '64']
    a.forEach(function(e) {
        b.push(e.toString());
    });
    return b;
}

transform(a) */


function getTransformedArray(array, func) {
   return forEach(array, func);
}

function increment(num, index, array) {
    return num + 1;
}

console.log(getTransformedArray([1, 7, 20], increment));