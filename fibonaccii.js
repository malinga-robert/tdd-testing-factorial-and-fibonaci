module.exports = {
    computeFibonacci:function(n) {
    let prev = 1;
    let next = 1;
    let count = 2;
    while (count < n) {
        let temp = next;
        next = next + prev;
        prev = temp;
        count++;
        if (count === n) {
            break;
        }
    }
    return next;

    }

}

// console.log(computeFibonacci(8));

// function fibonacci(n) {
//     return n < 1 ? 0
//         : n <= 2 ? 1
//             : fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(4));