//lexical scope         //scope chaining bottom to top

const outerr =()=>{
    const o='outer const'

    const inn = ()=>{
        const o='outer in'
        console.log(o)
    }
    inn()
}
outerr()            //espaxi scope ko execution context destroy hunxa

const outer =()=>{
    const o='outer const'

    const inn = ()=>{
        const o='outer in'
        console.log(o)
    }
    return inn
}
const b = outer()           //each naya instance of outer() call is unique 
const bb = outer()          //ani execution context of outer() destroy hunna kinaki child func return gareko xa
//child function return garda parent func ma vako variable ko ni access garna milxa
b()


const c =()=>{
    let cc = 0

    return ()=>{
        cc+=1
        console.log(cc)
    }
}

//closure
const one = c()
const two = c()
one()
one()
one()
two()


//function factory
const add =(factor)=>{
    return (num)=>{
        return num + factor
    }
}

const a5=add(5)
console.log(a5(5))
console.log(a5(10))

const a10=add(10)
console.log(a10(50))
console.log(a10(100))