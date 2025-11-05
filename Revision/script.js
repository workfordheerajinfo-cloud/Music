// let mypromise=new Promise((myResolve, myReject) =>{

//   let req =new XMLHttpRequest();
//     req.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
//     req.onload=()=>{

//         if (req.status==200){
//             myResolve(req.response);
//         }

//              else{
//             myReject(" Unable to fetch data")
//         }

//     }

//      req.send();

// })

// mypromise.then((res)=>{
//       myDisplayer(res);
// }, 
// (error)=>{
//     myDisplayer(error);
// }

// );

// function myDisplayer(value){
//     console.log("Printing Result : ", value)
// }


// let mypromise=new Promise((resolve, reject)=>{
//     let req=new XMLHttpRequest();
//     req.open("GET","https://jsonplaceholder.typicode.com/posts/1")
//     req.onload=()=>{
//         if(req.status==200){
//             resolve(req.response)
//         }
//         else{
//             reject("unable to fetch the data")
//         }
//     }
//     req.send();
// })

// mypromise.then((Response)=>{
//     myDisplay(Response)

// },
// (error)=>{
//     myDisplay(error)
// }
// );


// function myDisplay(value){
//     console.log("Printing Result", value);
// }

// let p=new Promise((resolve,reject)=>{
//     // now inside this promise section, we need to find what the actual promise is, so as the example the code inside of here would be me giving you the best video ever on promises, so simple i'm going to create a variable and set it to 1+1, so that way this is what the promise does and if this failed we reject it , so we would say, if a is equal to 2 , we should resolve it, but if it is not, so what say it's not equal to 2, we'll use  reject and inside that we can pass any message like "failed"... and in the resolve we can pass it absolutely anything we want but we'll just pass the message "success"..  so as u know this  code is always going to be successful becase 1+1 is always 2... so it's going to recall this promise is resolved..
     

//     let a=1+1
//     if(a==2){
//         resolve("success")
//     }
//     else{
//         reject("failed")
//     }

// })

// // now how would u as a programmer now that the promise has resolved , it turns out htat there is  a "then" method to know whether the promise is done...then method allow u to pass a function , further the function will accept the only one parameter nd that's going to be a message adn we just want to find waht we do with that function so we can just console.log and we'll print this is in the then and will pass a message...but if u want  to catch an error we need to use .catch , and this catch method will cath an error which is our reject states, it accepts a function as a parameter and further the function accepts a single parameter , we'll pass a message...and we'll do a console.log. this is how we actually use promises...

// p.then((message)=>{
//     console.log("this is in the then " + message)

// }).catch((message)=>{
//     console.log("this is in the catch" + message);

// })

// let mypromise =new Promise((resolve,reject)=>{
//     let a=3+2;
//     if(a==5){
//         resolve("success")
//     }
//     else
//         reject("Failed")

// })

// mypromise.then((message)=>{
//     console.log("problem has been" + message)

// }).catch((message)=>{
//     console.log("problem has been " + message)

// })

// let mypromise=new Promise((resolve,reject)=>{

//     let a=5+8;
//     if(a==13){
//         resolve("successfully")
//     }
//     else
//         reject("Failed")

// })

// mypromise.then((message)=>{
//     console.log("the problem been resolve"+message)

// }).catch((message)=>{
//     console.log("Error occured"+message)

// })

// function myDisplayer (value){
//     document.getElementById("testing").textContent=value
// }


// function mycalculator(num1,num2,callback){
//     let result= num1+num2;

//     if(callback){
//         callback (result)
//     }
//     return result;
// }

// let store =mycalculator(5,9,myDisplayer)
// console.log(store)


// // console.log(mycalculator(5,9,myDisplayer))

// function add(num1,num2){
//     return num1+num2

// }
//  let sum=add(83,59)
//  console.log(sum)

function add(a,b){
    return a+b;

}

function multiply(a,b){
    return a*b;

}

module.exports={
    add,
    multiply,

}
