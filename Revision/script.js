// function myDisplay(value){
//     document.getElementById("demo").textContent=value;
// }

// function mycalculator(num1,num2,callback){
//     let result =num1+num2;

//     if(callback){
//         callback(result);
//     }
//     // return result;
// }

//  mycalculator(9,8,myDisplay)
 

// let num =3.1459878;
// console.log(num.toFixed(2));

// setTimeout(renderImage, 10000)
// console.log("rending started", new Date().getSeconds());


// function renderImage(){
//     console.log("Rending Image : ", new Date().getSeconds())
// }

// function myDisplayer(value){
//     console.log("Printing Result", value)
// }

// function mycalculate(num1,num2,callback){
//     let result =num1+num2;

//     if(callback){
//         setTimeout(()=>callback(result),10000)
//     }
//     return result;
// }
// let box=mycalculate(18,45,myDisplayer)
// console.log(box)


// created promise...

// let mypromise=new Promise((resolve,reject)=>{
//     let req=new XMLHttpRequest();
//     req.open("GET", "https://jsonplaceholder.typicode.com/posts/1")
//     req.onload=()=>{
//         if(req.status==200){
//             resolve(req.response)
//         }
//         else{
//             reject("unable to fetch data")
//         }
//     }
//     req.send();
// })

// mypromise.then((res)=>{
//     myDisplayer(res)
// },
// (error)=>{
//     myDisplayer(error)
// }
// )
    

// function myDisplayer(value){
//     console.log("Printing value", value)
// }

// class car {
//     constructor(brand, model, color, year, owner) {
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.year = year;
//         this.owner = owner;
//     }
// }
// let car1=new car("TaTa","Nano","yellow",2007,"Ram kripal singh");
// console.log(car1)
// let car={
//     brand:"Tesla",
//     model:"Y-rox",
//     color:"Black",
//     year:2025,


// }
// console.log(car);

// let numbers=[1,2,3];
// let moreNumbers=[4,5,6,7];
// let combinedNumbers=[...numbers,...moreNumbers]
// console.log(combinedNumbers);

// let fruits=["Mango","Apple","Guava"];
// let morefruits=["PineApple",...fruits,"Grapes"]
// console.log(morefruits)

// let car={
//     brand:"Bmw",
//     model:"7-series",
//     color:"white",
//     year:2025,

// }
// let updatedcar={...car,color:"Black"};
// console.log(car)
// console.log(updatedcar)

// function sum(a,b,c){
//     return a+b+c;
// }
// let numbers=[4,5,9]
// let result=sum(...numbers)
// console.log(result)

// function multiply(a,b,c,d){
//     return a*b*c*d;
// }
// let num1=[2,4]
// let num2=[5,6]

// let result=multiply(...num1, ...num2)
// console.log(result)

// const fruits=["Apple","Mango","Orange"];
// let[firstfruit, secondfruit, thirdfruit]=fruits;
// console.log(firstfruit);
// console.log(secondfruit);
// console.log(thirdfruit);

// const number=[1,2,3,5,6,8,9]
// const[firstNo, secondNo, thirdNo, fourthNo]=number
// console.log(firstNo);
// console.log(secondNo);
// console.log(thirdNo);

// const car={
//     brand:"BMW",
//     model:"7-series",
//     color:"white",
//     year:2024,
// }
// const{brand, model, color, year}=car;
// console.log(brand);
// console.log(model);
// console.log(year);


let mypromise=new Promise((reslove,reject)=>{
    let req=new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    req.onload=()=>{
        if (req.status==200){
            reslove(req.response);
        }
        else{
            reject("Unable to fetch data")
        }
    }
    req.send();

})

mypromise.then((res)=>{
    myDisplayer(res)
},
(error)=>{
    myDisplayer(error)
}
)

function myDisplayer(value){
    console.log("Printing Result", value)
}

// let fruits=["Apple","Banana","Papaya","Guava"]
// let[firstfruit, secondfruit, thirdfruit, fourthfruit]=fruits

// console.log(firstfruit)
// console.log(secondfruit)
// console.log(thirdfruit)
// console.log(fourthfruit)

// const car={
//     brand:"BMW",
//     model:"7-series",
//     color:"white",
//     year:2025,
// }

// function printDetails({brand,model,year}){
//     console.log(`brand: ${brand}, model:${model}, year:${year}`)
    
// }

// let numbers=[1,2,3,4,5];
// let cube=numbers.map((number,Index)=>number*number*number)
// console.log(cube)













 





