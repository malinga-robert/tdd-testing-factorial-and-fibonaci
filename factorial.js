
const computeFactorial = (value) =>{
    if (value < 0) {
        return 'undefined';
    }else{
        let factorial = 1;
        for (let i= value; i>=1; i--) {
            factorial=factorial*i;
        }
        return factorial;
    }
}
export default computeFactorial;
// console.log(computeFactorial(4))


// function fac(n){
//     // 0! =1, 1! = 1
//     if(n>0 && n<=1){
//         return 1;
//     }
//     else{
//         return n*fac(n-1);
//     }
// }
// export default fac;




