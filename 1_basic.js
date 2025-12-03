/* console.log("hello world")

//DECLARATION: VAR  LET  CONST

// VAR 
var n ='emma'
var n ='bob'
console.log(n)
//var is globally scoped
var v = 5
var v=4
console.log(v)
{
    var v =8
    console.log(v)
}
console.log(v)



//LET
let l =5
l=3
//let l=25 cannot be reassigned
console.log(l)
//let is scoped to block
{
    let l ='hello'
    console.log(l)
}
console.log(l)



//CONST
const c =5
//c=44 cannot be changed
console.log(c) 
 */








// DATA TYPES : PRIMITIVE AND NON-PRIMITIVE

/* //primitive: numbers, string, boolian, null, undefined, symbol 
let age = 55
let name = 'alice'
let greet = `hello ${name}`    template literal
console.log(greet)
let data = null
let d
console.log(data)
console.log(d)



//non-primitive: object, array, function

//OBJECT
let person = {
    //key:value,
    name:'ram',
    age : 20
}
console.log(person)
console.log(person.age)
console.log(person['age'])



//ARRAY
let num= [23,24,25,24]
console.log(num[1])
num.push(90)            //adding number from end
num.unshift(60,0)       //from first
console.log(num)
num.pop()               //removing number from end
num.shift()             //from first
console.log(num)

//array methods
console.log(num.includes(24))       //check for elements inside an array
console.log(num.indexOf(24))        //gives us the index
console.log(num.lastIndexOf(24))    //gives us the index of the duplplicate values
//map,fiter,reduce, find, findIndex. 



//FUNCTION
function greeting(){
    return 'helloooo'
}
console.log(greeting)
console.log(greeting()) */









//OPERATORS: Arithmetic,Logical,Comparision,ternary,nulling
/* 
//ARITHMETIC
let a = 10, b = 3;
console.log(a + b);  // 13  (Addition)
console.log(a - b);  // 7   (Subtraction)
console.log(a * b);  // 30  (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1   (Modulus / Remainder)
console.log(a ** b); // 1000 (Exponentiation, 10^3)



//ASSIGNMENT
let x = 5;
x += 2; // x = x + 2 → 7
x -= 1; // x = x - 1 → 6
x *= 3; // x = x * 3 → 18
x /= 2; // x = x / 2 → 9
x %= 4; // x = x % 4 → 1



//COMPARISON
let p = 10, q = "10";
console.log(p == q);   // true  (equal value)
console.log(p === q);  // false (equal value + type)
console.log(p != q);   // false
console.log(p !== q);  // true
console.log(p > 5);    // true
console.log(p >= 10);  // true
console.log(p < 20);   // true
console.log(p <= 9);   // false



//LOGICAL
let isStudent = true;
let isAdult = false;
console.log(isStudent && isAdult); // false (AND: both must be true)
console.log(isStudent || isAdult); // true  (OR: at least one true)
console.log(!isStudent);           // false (NOT: reverses value)



//BITWISE
console.log(5 & 1);  // 1 (AND)
console.log(5 | 1);  // 5 (OR)
console.log(5 ^ 1);  // 4 (XOR)
console.log(~5);     // -6 (NOT)
console.log(5 << 1); // 10 (Left shift)
console.log(5 >> 1); // 2 (Right shift)
//  | = pipe operator



//TERNARY AND NULLISH
let age = 18;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message); // "Adult"

const user=null
let us= user ? user:"Guest"
console.log(us)
console.log(user ?? "Guest") // IF user=null print Guest

const u='ram'
let uss= u ? u:"Guest"
console.log(uss)
console.log(u?? "Guest") // IF user=null print Guest */























































