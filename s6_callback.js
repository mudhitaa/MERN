let allproduct =[
    {name :'one',price :100,discount :10},
    {name :'two',price :200,discount :9},
    {name :'three',price :300,discount :8},
    {name :'four',price :400,discount :7},
    {name :'five',price :500,discount :6},
]




//MAP FUNCTION

const proloop =(val,i)=>{
    let discountamt=(allproduct[i].price * allproduct[i].discount)/100
    let afterdis =allproduct[i].price-discountamt
    console.log('discount amount - ',discountamt)
    console.log('final amount - ',afterdis)
    console.log(`the final price is ${afterdis} after discount of ${discountamt}`)
    console.log('*************************************')
}

allproduct.map(proloop)
