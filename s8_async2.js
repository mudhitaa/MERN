/* const func1 =async(x)=>{
    if(x){
        return {message : "resolved1"}
    }else{
        throw {message :"thrown1"}
    }
}
const func2 =async(x)=>{
    if(x){
        return {message : "resolved2"}
    }else{
        throw {message :"thrown2"}
    }
}
const func3 =async(x)=>{
    if(x){
        return {message : "resolved3"}
    }else{
        throw {message :"thrown3"}
    }
}

func1(true)
.then((res)=>{
    console.log(res)
     func2(false)
        .then((res2)=>{
                console.log(res2)    
                })
        .catch((exe2)=>{
                 console.log(exe2)
                })
 }
)
.catch((exe)=>{
        console.log(exe)
    }) */







//FUNCTION CHAINING

/* function one (){
    console.log("i am function one")
    return {                        //RETURN CHAI OBJECT GARIRAKO XA FUNCTION ONE LE ANI INE KO BHITA KO FUNCTION CALL GARNA DOT OPERATOR
        two: ()=>{
            console.log("i am function two")
            return {
                three :()=>{
                    console.log("i am in function three")
                    return {
                        four : ()=>{
                            console.log("i am from four")
                        }
                    }
                }
            }
        }
    }
}
//chaining
one().two().three().four() */

//IIFE ; is compulsory












//PROMISE CHAINING

/* 
const func1 =async(x)=>{
    if(x){
        return {message : "resolved1"}
    }else{
        throw {message :"thrown1"}
    }
}
const func2 =async(x)=>{
    if(x){
        return {message : "resolved2"}
    }else{
        throw {message :"thrown2"}
    }
}
const func3 =async(x)=>{
    if(x){
        return {message : "resolved3"}
    }else{
        throw {message :"thrown3"}
    }
}

//promise chaining
func1(true)
    .then((res)=>{
        console.log(res)
        return func2(false)
    })
    .then((res2)=>{
        console.log(res2)
        return func3(true)
    })
    .then((res3)=>{
        console.log(res3)
    })
    .catch((exe)=>{
        console.log(exe)
    }) */







//USING TRY AND CATCH


/* const func1 =async(x)=>{
    if(x){
        return {message : "resolved1"}
    }else{
        throw {message :"thrown1"}
    }
}
const func2 =async(x)=>{
    if(x){
        return {message : "resolved2"}
    }else{
        throw {message :"thrown2"}
    }
}
const func3 =async(x)=>{
    if(x){
        return {message : "resolved3"}
    }else{
        throw {message :"thrown3"}
    }
}


//await lai async function bhitra matra use garna pauxa
const handler =async()=>{
    try{
        let result =await func1(true)
        console.log(result)
        let r2 = await func2(true)
        console.log(r2)
        let r3 = await func3(true)
        console.log(r3)
    }
    catch(exe){
        console.log(exe)
    }
}

handler()
 */





/* const login = async(x,y)=>{
    if (x==="admin"&&y==="a"){
        console.log("login successful proceeding to data function")
        return true
    }else{
        throw false
    }
}
const data = async(x)=>{
    if (x){
        return {message :"here is your data"}
    }else{
        throw {message :"no data access"}
    }
}

const access = async()=>{
    try {
        let r = await login("admin","a")
        let r1 = await data(r)
        console.log(r1)
    }
    catch(exe){
        console.log("login not verified")
    }
}

access() */