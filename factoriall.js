/*
Group members
Kayegi Priscilla
Malinga Robert */

module.exports = {
    computeFactorial:(n) => {
       //base case
       if (n == 0 || n == 1) {
           return 1;
       }
       else {
           // return n * factorial(n - 1);
           let factorial = 1;
           for (let i = n; i >= 1; i--) {
               factorial = factorial * i;
           }
           return factorial;
       }
   }
}


// console.log(computeFactorial(5));
// export default computeFactorial;