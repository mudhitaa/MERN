//synchronous   serially hunxa wait garxa  blocking method

//asynchronous    block gardaina



//setTimeout
/* console.log('stst')
const t = setTimeout(()=>{console.log('hlo')},1000)

console.log(t)
clearTimeout(t)
console.log(t) 

console.log('bye')
 */


//setinterval
/* let count =0
const i = setInterval(() => {
    count +=1
    console.log(count)     //infinite print garirakhxa
    if (count==5){
        clearInterval(i)
    }
}, 1000); */
//clearInterval(i)







//PROMISE      object ho jasle le async task ko completopn or failure represent garxa

//states : pending   fulfill   rejected
console.log('start')

/* const p = new Promise((resolve,reject)=>{

})
console.log(p) */




/* function getuser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = true
            if(error){
                reject({message : 'failed'})
            }
             resolve({name:'john'})
        },1000)
    })
}

//console.log(getuser())
getuser()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log('reject')
}) */


console.log('end')






/* function user(){
    return new Promise((resolve,reject)=>{
            let error = true
            if(error){
                reject({message : 'failed message'})
            }
             resolve({name:'john smith'})
        
    })
}

//console.log(getuser())
user()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log('reject')
}) */







//promise chaining


/* function newuser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = true
            if(error){
                reject({message : 'failed'})
            }
             resolve({name:'john'})
        },1000)
    })
}

function getOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error=true
            if(error){
                reject({message:'User order failed'})
            }
            resolve({name:"jhon smith",email:"haskuh@gmail.com"})
        },2000)
    })
}

newuser()
.then((users)=>{                //.then pani function nai ho so function reurn 
    console.log(users)
    return getOrder()
    })
    .then((orders)=>{
        console.log(orders)
    })
    .catch((error)=>{                    //every promise ko lagi .then huna parxa tara catch eutai vaye sab lai hunxa    
    console.log(error)
})
console.log("END") */

















//DAY 5


//.finally 

/* function getuser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = true
            if(error){
                reject({message : 'failed'})
            }
             resolve({name:'john'})
        },1000)
    })
}

//console.log(getuser())
getuser()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log('reject')
})
.finally(()=>{
    console.log('cghc')
}) */




//fetch

/* fetch('https://jsonplaceholder.typicode.com/albums/1').then((response)=>{
    //console.log(response)                     //unreadable form ma data aauxa server bata
    return response.json()                      //redable form ma json le ni promise return garxa

}).then((data)=>{
    console.log(data)
})
 */





//asyn/await

/* const ync = async()=>{
    return 'good'
}
console.log(ync()) */




/* function newuser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = true
            if(error){
                reject({message : 'failed'})
            }
             resolve({name:'john'})
        },1000)
    })
}

function getOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error=true
            if(error){
                reject({message:'User order failed'})
            }
            resolve({name:"jhon smith",email:"haskuh@gmail.com"})
        },2000)
    })
}

const f =async()=>{
    try {
    const u = await newuser()
    console.log(u)

    const o = await getOrder(u)
    console.log(o)
    }
    catch (err){
        console.log(err)
    }
    finally{
        console.log('hloooo')
    }
}

f()
console.log("last")
 */




//fetch ko lagi  

/* const ff=async()=>{
try{
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1')
    const data = await res.json()
    console.log(data)
}
catch(error){
    console.log('try wala error')
}
}
ff() */









//event loop       js le async event loop bata garxa
