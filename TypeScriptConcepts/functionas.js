const { rejects, fail } = require("assert");
const { log } = require("console");
const { promises } = require("dns");
const { resolve } = require("path");
const { off } = require("process");

// Call back function
function callbackfunction(name, callbackfunction) {
    console.log("Hi" + name);
    callbackfunction();
}
function endfunction() {
    console.log("bye");
}
callbackfunction("Hareesh", endfunction);

function for_Looping(){
    let a=[1,2,4]
    let name=["Hareesh", "Rakesh","Sunil"]
    for(let i in a){
        console.log("Index: "+i)
    }
    for (let j of name){
        console.log("values: "+j)

    }

}

for_Looping()

// Slice and splice
function slice_and_Splice(){
    let a=[1,2,3,4,5]
    let b=["hareesh","Bharth","vinay"]
    // slice example: it will not make any changes by add or deleting
    const results=a.slice(2,4)
    console.log("Slice: "+results)
    console.log(a)

    // Splice Example: It will remove and add values
    const res= b.splice(1,3)
    console,log("Splice: "+res)
    console.log(res)

}

slice_and_Splice()

const Mypromise= new Promise((resolve,rejects)=>{
    prm=fail;

    prm?resolve("success"): rejects("failed")

})

Mypromise.then(console.log).catch(console.error());

const arr=[1,2,3,4]

const even= arr.filter(num=>num%2==0)
console.log(even)

// reduce

const total= arr.reduce((sum,num)=>sum+num)
console.log(total)