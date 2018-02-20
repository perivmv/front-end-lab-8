function getTransformedArray(array, func) {
   return forEach(array, func);
}

function increment(num, index, array) {
    return num + 1;
}

console.log(getTransformedArray([1, 7, 20], increment));
