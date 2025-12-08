/* const func1 =()=>{

    const func2 =(x)=>{
    console.log("i am from function 2 ",x)
    }
    func2(true)
}

function func3(){

}

func1()
console.log("i am last line") */






//CALLBACK
function func2(x){
    console.log("i am function 2",x)
}

const func4=(y)=>{
    console.log("i am function 4",y)
}
const func1 =(cb,cb2)=>{        //callback
    cb(21)
    cb2(41)
}
const func3 =(cb)=>{        //callback
    cb(23)
}


func1(func2,func4)
func3(func2)




