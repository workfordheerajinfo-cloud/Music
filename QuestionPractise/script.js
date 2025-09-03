// let N=prompt("Enter a Number")
// N=Number(N)
// if(isNaN(N) || N<=0){
//     console.log("Invalid Input")
// }
// else{
//     for(i=1;i<=N;i++){
//         console.log(i);
//     }
// }

// function OnetoN(N){
//     for(i=1;i<=N;i++){
//         console.log(i);
//     }
// }

// OnetoN(20);


// print reverse numbers...
// let n =prompt("Enter a number")
// n=Number(n);
// if(isNaN(n) || n<=1){
//     console.log("Invalid input")
// }else{
// for(i=n;i>=1;i--){
//     console.log(i)
// }
// }

// sum of even number from 1toN;

// let n=100;
// let sum=0;

// for (i=1;i<=n;i++){
//     if(i%2===0){
//         sum+=i; //add even number to the sum
//     }
// }
// console.log(sum)

//Calculate factorial of n number

// let n=5;
// let factorial=1;

// for(i=1;i<=n;i++){
//     factorial*=i;
// }
// console.log(factorial);


// generate fibonacci terms..
// let N = 10;
// let fib = [0 , 1];
// for (i = 2; i< N; i++){
//     fib.push(fib[i-1]+fib[i-2]);

// }
// console.log(fib)

// let N = 10; // Change this to generate more or fewer terms
// let fib = [0, 1]; // Starting two terms

// for (let i = 2; i < N; i++) {
//   fib.push(fib[i - 1] + fib[i - 2]);
// }

// // console.log("Fibonacci sequence up to " + N + " terms:");
// console.log(fib);

// finding Lcm of two numbers...
// let a=12 , b=18;

// function findgcd(x,y){
//     while(y!==0){
//         temp=y;
//         y=x%y;
//         x=temp;
//     }
//     return x;
// }
// let gcd=findgcd(a,b);
// let lcm=a*b/gcd;
// console.log(lcm);

// print right angle triangle pattern;




// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// printing 1,22,333...
let rows =5;
for(i=1;i<=5;i++){
    pattern=""
    for(j=1;j<=i;j++){
        console.log()

    }
    
}
// finding lcm of two numbers...
function findgcd(a,b){
    while(b!==0){
        let temp = b;
        b=a%b;
        a=temp;
    }
    return a 
}
let gcd=findgcd(8,5)
let lcm=(8*5)/gcd;
console.log(lcm)









