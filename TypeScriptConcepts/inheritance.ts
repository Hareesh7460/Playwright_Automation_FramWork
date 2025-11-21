class Company{
    companyName:String="Techouts";
    organizations_details():String{
        return this.companyName
        
    }
}
class Location extends Company{

        organizations_details(cName:String):String{
        this.companyName= cName;
        return this.companyName;
    }

}