//global scope
let x = 1
const y=9
var z=6


//block scope
{
    const bloc ='a'     //let and const block scoped hunxa tara var hudaina global jastai hunxa
    console.log(bloc)
    let blo = 'h'
    console.log(blo)

    var b= 'varr'
    console.log(b)

}
console.log(b)
//console.log(blo) 



//function scope                 let, const ani blocked scope naya add gareko vayera var ko function scope matra hunxa
function scope(){
    //const let
    //var hudaina esma
    const funn = 5
    let fu = 55
    var f = 555
    if(true){
        let xx = 3
        console.log(xx)
        console.log(fu)
    }
    //console.log(xx)
}
scope()
//console.log(f)





const o='global const'

//lexical scope         //scope chaining bottom to top

const outer =()=>{
    const o='outer const'

    const inn = ()=>{
        const o='outer in'
        console.log(o)
    }
    inn()
}
outer()  






