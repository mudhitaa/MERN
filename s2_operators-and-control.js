//operators and control statements


//arithmatic or mathemathical operators
//*+-/%
//increment and decrement operators
//++ --

/* let a = 13
console.log(a++) //13  paila print garxa ani badhauxa a=14 post increment
console.log(++a)//15    badhayera print garxa  pre increment */








//assignment operators
//=  +=  -=  *=  /=  %=


//comparision operators  -> boolean return garxa
//==  ===  !=  !==  >  <  >=  <=

/* a= 10
b='10'
console.log(a==b) //true
console.log(a===b) //false
console.log(a!=b) //false
console.log(a!==b) //true
console.log(a>b) //false
console.log(a<=b) //true
 */




//string concatinaton operator
/* let firstName= "John"
let lastName= "Doe"
console.log(firstName + " " + lastName) //John Doe

x=1
y='hello'
console.log(x+y) //1hello
console.log(x-y)
console.log(x*y) */
//NaN not a number because - is not defined for string and number






//logical operators
//AND &&
//OR ||
//NOT !

/* let isstudent = true
let isemployeed = false
console.log(isstudent && isemployeed); // false (AND: both true)
console.log(isstudent||isemployeed); // true  (OR: at least one true) */









//CONTROL STATEMENTS 




//IF ELSE
/* let day ='saturday'
if (day==='sunday'){
    console.log('holiday')
} else if (day==='saturday'){
    console.log('weekday')
}

//ARRAY INCLUDES METHOD
let exts =['.jpg','.png','.gif']
let type ='.png'
console.log(exts.includes(type)) //true
console.log(!exts.includes(type)) //false


if (exts.includes(type)){
    console.log("file extension valid")
} else {
    console.log('invalid file extention')
} */




//conditional(ternary) operator
//(expression)?true block:false block
/* let a = 10
let r = (a==10)?"a is 10":"a is not 10"
console.log(r)

let day = "friday"
console.log(day=="sunday"||day =="saturday"?
                "holiday":
                            (
                                (day =="friday")?
                                    "tgif":
                                    "weekday"
                            )
            ) */








//template literals

//`` backtick
//helps in multiline string without the use os \n

/* let name = 'mudhita'
let email = 'mudhita @gmail.com'
acc = 9876543210

let temp = `
dear ${name},
your email is ${email}
it has been registered successfully.
your account number is ${acc}`

console.log(temp) */






//object or array destructure
let user ={
    name : 'ram ',
    email :"ram @gmail.com",
    age :22,
    position:'manager'
}

/* //(...)rest operator
let{name,email:renaming, ...other}=user   //aliasing email to renaming and rest to remaining
console.log(user.age)
console.log(name)
console.log(renaming)
console.log(other) */




//spread operator
let user1 = {...user} //copying user to user1  //shallow copy
console.log(user)
console.log(user1)

user1.name ='shyam'
console.log(user)
console.log(user1)