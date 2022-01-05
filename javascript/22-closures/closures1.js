function createMultiplier(n) {
    return function(x) {
        return x * n;
    };
}

let multiplyBy5 = createMultiplier(5);

console.log(multiplyBy5(10));

console.log(multiplyBy5(12));

console.log(multiplyBy5(7));