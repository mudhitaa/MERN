//print 1 to 10 using only function no loop
//recursive function
/* function repeat (i){
    console.log(i)
    i++
    if(i<11){
        repeat(i)
    }    
}

repeat(1) */



//REPL read evaluate print loop
//asynchronous function

/* const func1 =(cb,cb1)=>{
    setTimeout(()=>{
        console.log("i will take a 1 second to print")
        cb()
        cb1()
    },1000)         //1 sec
    
}
const func2 =()=>{
    console.log(2)
}
const func3 =()=>{
    console.log(3)
}

func1(func2,func3) */




//promish
//is an object data type

//promise
    //pending(execute)
        //fulfilled(success)/reject(exeception)
    //settlement

/* const mypromise = new Promise()

function mypromisefunc(){
    return new Promise()
}

async function mypromisefunc1(){

}
 */




/* const mypromise = new Promise((resolve,reject)=>{
    //code execution time consuming here
    err = true
    if(err){
        resolve('i am successful')   //succecc
    }
    else{
        reject("i failed")    //fail
    }
    
})


//handling promise => two ways
mypromise
.then((resolvedata)=>{
    console.log(resolvedata)
})
.catch((exeception)=>{  
    console.log(exeception)
})
.finally(()=>{
    console.log("finally is always printed")
}) */








/* function mypromisefunc(user,pass){
    return new Promise((res,rej)=>{
        if(user ==='admin'&& pass ==="admin"){
            res('login successful')
        }else{
            rej('login failed')
        }
    })
}

//handling promise => two ways
mypromisefunc('admin',"admin")
.then((resolvedata)=>{
    console.log(resolvedata)
})
.catch((exeception)=>{  
    console.log(exeception)
})
.finally(()=>{
    console.log("finally is always executed")
})


console.log('last line') */






//ASYNC

const mypromisefunc2 = async (user,pass)=>{
        if(user ==='admin'&& pass ==="admin"){
            return('login successful')                 //async ko return le resolve trigger garxa
        }else{
            throw('login failed')                       //reject trigger garxa
        }
    
}

//handling promise => two ways
mypromisefunc2('admin',"admin")
.then((resolvedata)=>{
    console.log(resolvedata)
})
.catch((exeception)=>{  
    console.log(exeception)
})
.finally(()=>{
    console.log("finally is always executed")
})


console.log('last line')