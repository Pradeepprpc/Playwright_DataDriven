export class Employee{
    //property:datatype
    public empid : number
    public empname:string
    public empaddress:string
    private empsalary:number
    readonly offer:number
    static companyname = 'QEdge'
    //create constuctor
    constructor(id:number, name:string, salary:number, address:string, offer:number)
    {
        this.empid = id
        this.empname = name
        this.empaddress = address
        this.empsalary = salary
        this.offer = offer
    }
    //write function
    empInfo()
    {
        console.log(`Emp ID ${this.empid} name ${this.empname} address ${this.empaddress} salary ${this.empsalary} offer ${this.offer}`)
    }
    //write static method
    static displayCompany()
    {
        console.log(`company name ${Employee.companyname}`)
    }
}
//calling class
const emp = new Employee(1111,'abc',323232, 'Sydney', 60000)
const emp1 = new Employee(222,'CDE',2222,'Canberra', 2323232)
const emp2 = new Employee(333,'XYZ',223232,'Bresbane', 353635)
emp.empInfo()
emp1.empInfo()
emp2.empInfo()
console.log(Employee.companyname)
