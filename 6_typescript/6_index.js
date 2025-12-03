//run it in cmd         :  tsc 6_index.ts        node 6_index.js        all together    : npx tsc 6_index.ts && node 6_index.js  
//run it in powershell  :  npx tsc 6_index.ts    node 6_index.js        for all together: npx tsc 6_index.ts ; node 6_index.js
//typescript -> type define garera ani code garera ani teslai js ma convert garney kaam matra ho
var a = 90;
a = 68;
//a='sc'   string is not assignable
//DATA TYPES
//string number bollean null undefined
//string
var b = 'cbhz';
//number
var C;
//boolean
var d;
//null
var e;
//undefined
var f;
//SPECIAL TYPES
//any    unknown   void   never
//ANY  any type  can be assigned
/* let g:any = 'any'
console.log(g.toLocaleUpperCase())
g=10
console.log(g)


//UNKNOWN
let h :unknown='unknown'
//console.log(h)        //type check garna parxa etikai error dekhaudaina run time ma error aauxa
if(typeof h === 'string'){
    console.log(h.toLocaleUpperCase())
} */
//VOID-> void ley undefined dinxa
//NEVER-> kei pani didaina//
// ->transpile typescript into javascript
//ARRAY
var num = [1, 2, 3, 4];
var strg = ['sdf', 'sf', '5'];
//OBJECT , INTERFACE
/* const user:{name:string,email:string}={
    name : "shyam",
    email : "shyam@gmail.com",
}
console.log(user)
console.log(user.name)
user.name='ram'
console.log(user.name)
console.log(user) */
/* interface Iuser{
    name:string
    readonly email:string //cannot assign to 'email' because it is a readonly property
    gender?: string //->optinal hunxa...value tala rakhda ni milxa narakhda ni hunxa tara declare chai hunu parda
}
interface Iuserpass extends Iuser{
    readonly password: string
}

const USER:Iuser={
    name: "ion",
    email:"ion@gmail.com"
}
const USER1:Iuserpass={
    name: "banana",
    email:"banana@gmail.com",
    password:"12344"
}
console.log(USER1)
console.log(USER1.name)
USER1.name = 'sita'
//USER1.email = 'sita@gmail.com'  //cannot reassign because readonly
console.log(USER1.name) */
//FUNCTION
/* const add =(a:number,b:number)=>{   //return garena vane return type void hunxa
    console.log(a+b)
    //return a
}
const sub =(a:number,b:number):never=>{
    console.log(a-b)
    throw ''
}
const mul =(a:number,b:number):number=>{
    console.log(a*b)
    return a*b
}

let v=add(10,4)
//console.log(v)
//add("12","33")-> yo case ma mathi number bhanera declare gariskaey paxi aba string lai add garna mandaina
//sub(5,3) */
//UNION( | :OR jasto) and INTERACTION( & :AND jsto)
var i;
i = null;
i = 8;
var t = 'active';
console.log(t);
/* type a = {
    name :string
    age :number
}
type b = {
    emain :string
    pwd :string
    status?:'active'|'deactive'
}

type ab = a|b       //either a or b ko complete chai hunai parxa
type aabb =a&b      //dubai a and b ko complete huna parxa

const c: ab={
    name:'first',
    age:55,
    pwd:'123'
}
const cc: aabb={
    name:'second',
    age:5 ,
    emain :'fdx',
    pwd :'zvz',
    status:'active',
}

console.log(c)
//console.log(c.name)
console.log(cc.name) */
//
var id;
id = 5;
id = 'identity';
console.log(id);
//enum
//numbered enum
/* enum role {
    admin,  //0
    user=10,  //10
    superadmin   //11
} */
var rolee;
(function (rolee) {
    rolee["admin"] = "admin";
    rolee["user"] = "use";
    rolee["superadmin"] = "sup";
})(rolee || (rolee = {}));
var u = {
    name: 'z',
    role1: rolee.admin,
};
//class
//generic type
