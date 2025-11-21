class employeeDetails{

    empName:String;
    empID:String;

    constructor(name:String, id:String){
        this.empName=name
        this.empID=id
        console.log(this.empName+": "+ this.empID)
    }
    displaye():void{
        this.empID="Bharath"
        this.empName= "10998"
        console.log(this.empName+": "+ this.empID)

    }

}

var empdt= new employeeDetails("Hareesh","197");
empdt.displaye();