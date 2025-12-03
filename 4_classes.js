



class person{
    name;   //define nagarda ni hunxa
    email;
    #num;   //private

    constructor(name,email,num){
        this.name=name
        this.email=email
        this.#num=num
    }

    getname(){
        return this.name
    }
    getnum(){
        return this.#num
    }


}

/* const per = new person('ram','dfsf',3746)
const per2 = new person('shyam','sdgssf','554354')
console.log(per)
console.log(per2)
console.log(per2.getnum())
 */



class student extends person{ 

    constructor(name,email,num,sec,roll){
        super(name,email,num)
        this.sec=sec
        this.roll=roll
    }

    

}

const s =new student('sita','sda',5483,'b',55)
console.log(s)
console.log(s.getnum())





//static methods
class calc{

    static add(a,b){
        return a+b
    }

    static sub(a,b){
        return a-b
    }
}

const c = new calc()
console.log(calc.add(5,9))