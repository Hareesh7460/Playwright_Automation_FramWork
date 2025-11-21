import {test} from "@playwright/test"
import { console } from "inspector";

/* First questions:
    Write a Programe for a String Reverse 
*/

test("string_Reverse",async({})=>{

    const name= "Vega"
    let reveredString="";
    for(let i=name.length-1;i>=0;i--){
        reveredString +=name[i]
    }
    console.log(reveredString)

})
/* Finding Non_Repeated_latter From a String
*/

test("First_non_Repeated_Latter",async()=>{
  const fName= "Telugu"
  const frq={}
  for(let chars of fName){
    frq[chars]=(frq[chars]||0)+1


  }
  for(let chat of fName){
    if(frq[chat]===1){
        console.log("First_non_repeated_latter",chat)
        return

    }
  }

})
/* Finding_Overls_In_String
*/
test("Finding_Overls_In_String",async()=>{
    const o_Name="Telugu"
    let vowels=["a","e","i","o","u"]
    for(let i=0;i<o_Name.length;i++){
      let  characters = o_Name[i].toLowerCase()
        if(vowels.includes(characters)){
            console.log(characters)

    }
    }
})

/* Reverse_each_word_in_a_sentence
*/
test("Reverse_each_word_in_a_sentence",async()=>{
    const sentence= "Wellcome Back Hareesh"
    let sentence_of_Arrya= sentence.split(" ");
    console.log('sentence_of_Arrya: ', sentence_of_Arrya);
   let word=""
    for(let i=sentence_of_Arrya.length-1;i>=0;i--){
       word += sentence_of_Arrya[i]
    }
    console.log("Reverse_word :"+ word)
})
/* Checking_Given_String_is_Palindrom
*/
test("Checking_Given_String_is_Palindrom",async()=>{
    const name= "madam"
    let pl= name.toLowerCase().split("").reverse().join("")
    console.log(pl);
    if(pl==name.toLowerCase()){
        console.log("Given String is Palindrom:");
    }
    else{
        console.log("Given String is not Palindrom");
    }
})

/* Find_the_Duplicate_Number_from_Array
*/
test("Find_the_Duplicate_Number_from_Array",async()=>{
    const number=[1,2,2,3,4,5,5,6,6]
    let ord={}
    let duplicate=[]
    for(let i of number){
        ord[i]=(ord[i]||0)+1

    }

    for(let j in ord){
        if(ord[j]>1){
            duplicate.push(Number(j))
        }

    }

})
/* Removing the Duplicates

*/
test("remove_Duplicates",async()=>{
    const numbers=[1,2,3,4,4,5,5,3,2,7,8,9]
    const new_Arrya=[...new Set(numbers)]
    console.log(new_Arrya);
})

/* Finding the Largesy_Number

*/
test("Find_Largest_Number",async()=>{
    const numbers=[1,9,8,7,6,5,4,3,2,1]
    const numberss=[...new Set(numbers)]
    let a= numberss.sort((a,b)=>a-b)
    console.log(a[0])

})

/* Sorting without using sort
*/
test("Sorting_without_use_sort",async()=>{
    const number=[1,2,3,4,5,6]
    let unique={}
    let results=[]
    for(let num of number){
        if(!unique[num]){
            unique[num]=true;
            results.push(num)
        }

    }
    console.log(results);

    // Example array
let arr = [5, 3, 1, 4, 2];

// Bubble Sort implementation
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap arr[j] and arr[j + 1]
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); // Output: [1, 2, 3, 4, 5]
})

test("Spliting_number_and_Special_character",async()=>{
    const text="writ4e5a#p@rogram"

let sum=0
let hash=""
for(let char of text){
    
    if(!isNaN(char) && !char==" "){
        sum +=Number(char)
    }
    if(char=="#"){
        hash+=char;
    }
    
}
console.log(sum+ " "+ hash)
})

// If you want to segrigate the chat and space from string

test("separate the chat and space from string",async()=>{
    const text= "hellouser453##@gmail.com"
    const onlyLatters= text.replace(/[^a-zA-Z]/g,"")
    console.log(onlyLatters)

    // This will remove the characters
    const onlyNumber=text.replace(/[a-zA-Z]/g,"")
    console.log(onlyNumber)
})