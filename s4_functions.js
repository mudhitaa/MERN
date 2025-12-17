//built in functions
//custom functions

/* function addtwono(a,b){
    //body of the function
    let c = a+b;
    return c; //last statement
    //does not execute after this
}

let r = addtwono(10,20)
console.log(r)

function noparam(){
    console.log('this function requires no parameters')
}//if function doesnt return anything it returns undefined by default
noparam()


let x =  function alpha(){
    console.log('this is alpha function')
}
 */







//function to get a sum of numbers in an array
//a function can take anything from parameters(ip) and return anything(op)

let num =[10,20,30,40,50]
/* function sum(arr){
    let total = 0
    for (let i of arr){     //i is not index but the element itself
        total +=i
    }
    return total
}

var summ = sum(num)
console.log('the sum is = '+summ)





//arrow function 

const calcu = (arr1)=>{
    let mul = 1
    for (let i of arr1){
        mul *=i
    }
    return mul
}

let m = calcu(num)
console.log(m)
 */



//clouser function => function ko bhitra arko function that is depend on the main function only

const calcu1 = (arr1)=>{
    let mul = 1
    for (let i of arr1){
        mul *=i
    }

    const printdata =(param1)=>{
        console.log(param1)
        
    }
    //printdata(mul)
    return printdata  //returning function
}

calcu1(num)

const abc = calcu1(num)
abc('hello')
abc(55)


