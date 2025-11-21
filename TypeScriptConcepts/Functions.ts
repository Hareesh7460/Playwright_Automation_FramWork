
function studentDetails(studentName:String,studentRollNumber:String){
    console.log(studentName,studentRollNumber);
}

studentDetails("hareesh","1917");


// Arrow function

var details=(sName:String,sNumber:String):String=>{
    return  sName+" "+ sNumber;

}

// function overloading

function userdetials(userNumner:String,userID:String): String;
function userdetials(userName:String,userdept:any): any;

function userdetials(par1:any,par2:any ): any{

}
console.log(userdetials("9110784175","1917"));

// rest Prameters
const companydetails= (loc:string, ...others:String[]):string=>{
    return loc + " "+ others
}

console.log(companydetails("Techouts","Hyderabad","Vyshanvi cuy"))


