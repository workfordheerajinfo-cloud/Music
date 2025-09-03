function sum(...args){
    let total =0;
    for (arg of args){
       total+=arg;  
    }
   
    return total;
}
console.log(sum(1,2,5))

function multiplier(multiplier,...number){
    let result=[]
    for(num of number){
        result.push(num*multiplier)
    }
    return result;
}
console.log(multiplier(3,5,6,64,643,));

// let fruits=["Apple","Banana"]
// fruits.unshift("orange")
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.shift()
// console.log(fruits)
// console.log(fruits.includes("Banana"))

function addNumbers(...number){
    let sum=0;
    for(num of number){
        sum+=num;
    }
    return sum;
}





addNumbers(2,5);
console.log(addNumbers(2,5))

const fruits=["Apple","Banana","Orange"]
const [firstfruit, secondfruit, thirdfruit]=fruits
console.log(firstfruit)
console.log(secondfruit)
console.log(thirdfruit)

let numbers=[1,2,5,7,9,8]
let[firstnumber,secondnumber, thirdnumber,fourthNumber]=numbers
console.log(firstnumber)
console.log(secondnumber)
console.log(thirdnumber)
console.log(fourthNumber)

