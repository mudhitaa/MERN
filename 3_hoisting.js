//hoisting = variable and function declaration lai scope ko top ma move garxa
//scope top ma lagxa declaration part lai matra 
//var x
//console.log(x)
//x=50


//1 memory creation phase[execution context creation]
    //x=undefined
    //x=50
    /* greet = function greet(){       
            console.log('hlo')
        }                              pura func block lai memory ma store garxa */

//2 execution phase



console.log(x)
var x =50          //partial hoisting  only declaration i.e x le memory linxa tara value undefined rakxa VAR ko case ma   
console.log(x)



greet()
function greet(){       //complete hoisting
    console.log('hlo')
}






//let and const


//console.log(y)  //temporal dead zone - initialize garnu vanda agadi ko sabai temporal dead zone
let y = 10      //hoist hunxa tara initialize gare paxi matra use grane
console.log(y)



//function expression
//say()
var say =()=>{          //partial hoisting like variable
    console.log('hello')
}
say()

//g()
var g =()=>{
    console.log(10)
}
g()