/* class Users{
    //body
    //public vanne chai hunna
    name
    #email      //private
    address

    set(n,e,a){
        //property of class is accessed by this
        this.name =n
        this.#email =e
        this.address =a
    }
    getemail(){
        //property of class is accessed by this
        console.log(this.#email)
    }

}


const obj = new Users()
obj.set("Mudhita  bajracharya","emailone","swyambhu")
const obj2 = new Users()
obj.set("Rikesh jung thapa","emailtwo","swyambhu")


console.log(obj)
obj.getemail()

 */






class product{
    name
    price
    discount
    #disamt
    #afterdis

    constructor(n="none",p=0,d=0){
        //never async arrow return
        this.name=n
        this.price=p
        this.discount=d
    }

    getdisamt(){
        //console.log(`thename of product is ${this.name} original price is ${this.price} and there is ${this.discount}% discount`)
        this.#disamt=this.discount/100 * this.price
        this.getafter()
    }
    getafter(){
        this.#afterdis=this.price - this.#disamt
    }

    printval(){
        console.log(`the name of product is ${this.name}\nOriginal price is ${this.price} and there is ${this.discount}% discount\nSo the final price becomes${this.#afterdis}`)
    }
}

const apple = new product('apple',700,5)
apple.printval()
