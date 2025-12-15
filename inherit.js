class a{
    a
    
    constructor(){                      //constructor pani inherit garxa
        console.log('i am from a')
    }
    getmyclass(){
       console.log("from a")
    }
}

class b extends a{
    b

    constructor(){
        super()                         //child ma super hunai paro natra error aauxa
        console.log('i am from b')
    }

   getmyclass(){
    console.log('class b')
   }
}

const objb = new b()
objb.getmyclass()