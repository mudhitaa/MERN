//FUNCTION EXPRESSIONS

/* let sub = function(a,b){
    console.log(a-b)
}  
sub(10,5) */



//ARROW FUNCTION
 /* let subb = (a,b)=>{
    console.log(a-b)
    return 2*a-b
}
r=subb (10,8)
console.log(r)

let greet = () => console.log("Hello!");
greet(); // Hello!

//single wala
let mul = (a,b) => console.log(a*b)
mul(2,8)

let mull = (a,b) => a*b
console.log(mull(2,8)) 

//shorter method for single parameters
let multiply =a => a*2
console.log(multiply(2))*/ 

 

//CALLBACK FUNCTION
/* const child =(name)=>{
    console.log("hello from child",name)
}
const parent =(fun)=>{
    console.log(fun)
    console.log("hello from parent")
    fun("Ram")                          //child is callback function      
}
parent(child)                           //referencing no use ()
//parent(child("sita"))                 
parent((name)=>{                        //anonymus func pass gareko parent function ma
    console.log("func inside func")
})
let x=20
const parentt =((name)=>{
    console.log('hloooo',name)
})
parentt(x) */



//HIGHER ORDER FUNCTION   function dine and/or firta garne functions
/* const outer = ()=>{
    const child =(name)=>{
        console.log("inner",name)
    }
    return child
} 
const f=outer()
f("alice") */










//ARRAY METHODS
const num =[5,2,8,9,55]

//forEach   it has no return
/*  num.forEach((value,index,array)=>{
    console.log(value,index,array)
}) 



//find    stops after the req element is reached and returns the element may not complete full array
let e = num.find((val)=> {
    if (val==2) return val
}) 
console.log(num.find)
console.log(e)



//findIndex
const index= num.findIndex(value=>value<3)
console.log(index)  */



//every and some     returns true or false for complete array
/* const a =num.every(val => val>10)
console.log(a)
const b =num.some(val => val>10)
console.log(b) */



//TRANSFORMATION

//map
/* const dou = num.map((value)=> value*2)
console.log(num)
console.log(dou)



//filter
const filt= num.filter(value => value%2 ===0 )
console.log(filt)
const filtt= num.filter(value => value%2 != 0 )
console.log(filtt) */



//reduce  array into a single value--has additional parameter
/* const sum= num.reduce((acc,value) => {return acc+=value} )
console.log(sum)



//reverse
num.reverse()
console.log(num) */



//sort
/* const u = ['avu','gabbie','bob','aash']
u.sort()
console.log(u)

num.sort()     //treats num as string
console.log(num)

num.sort((a,b)=> {
    return a-b   // 0 +ve(swap) -ve ani swap gardai janxa ascending order
})     
console.log(num)
//descending ko lagi b-a

const user=["ram","jhon","abhay"]
user.sort((a,b)=>{
    b.localeCompare(a)              //descending
})
console.log(user)
 */



 
