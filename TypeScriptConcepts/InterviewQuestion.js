// Find the first latter which is not repeqated in the String

function findingfirstvalue(str){
    const frque={}
    for(let char of str.toLowerCase()){
        frque[char]= (frque[char]||0)+1;
        
    }
    for(let char of str.toLowerCase()){
        if(frque[char]===1){
            return char
        }
    }

}
console.log(findingfirstvalue("Hareesh"))

// find a numner which is duplicated
function findingNumbers(number){

}
