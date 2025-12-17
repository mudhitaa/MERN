//decision making statements
//truthy and falsey
//false 0 null nan empty("",null) undefined

/* let x
if (x){
    console.log('true')
}else{
    console.log('false')
} */

/* 
let units = 450
let bill = 0
if (units<=50){
    bill = 100
}else if (units<=70){
    bill = 100 + (units - 50)*7
}
else if (units<=100){
    bill = 100 + 20*7+ (units -70)*10
}
else if (units<=150){
    bill = 100 + 20*7+ 30*10+ (units -100)*15
}
else if (units<=250){
    bill = 100 + 20*7+ 10*30+ 50*15+(units -150)*20
}
else if (units<=350){
    bill = 100 + 20*7+ 10*30+ 50*15+100*20+(units -250)*27
}
else {
    bill = 100 + 20*7+ 10*30+ 50*15+100*20+100*27+(units -350)*35
}

console.log("Total bill is:",bill) */





//switch case
/* day="sunday"
switch(day){
    case'sunday':
    case'saturday':
    console.log('holiday')
    break;

    default:
        console.log("weekday")
        break;
}
 */


//loops iteration 
/* for (let i = 1; i<6;i++){
    console.log(i)
}

let j =1
do {
    console.log("hello")
    j++
}while(j<5)
 */




/* people =[   {name:'ram',age:23},
            {name:'sita',age:21},
            {name:'gita',age:33}
        ]

for(let i = 0;i<people.length;i++){
    console.log('name:',people[i].name)
    console.log('age:',people[i].age)
}
for(let person of people){
    console.log('name:',person.name)
    console.log('age:',person.age)
} */