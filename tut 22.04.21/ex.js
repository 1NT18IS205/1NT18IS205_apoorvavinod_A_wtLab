function add()
{
    a = a || 0
    b = b || 0
    console.log(a+b)
}
add(4,0)

var sum=add(4,9,8)
console.log(sum)

//ES6
const mult=(c=1,d=1)=>
{
    console.log(c*d)
}
mult(6,8)


//or
const mult=(c=1,d=1)=> {console.log(c*d)} //if nly 1 stmnt

//or
//if multiple put in brackets


const result = add(8,6)+mult(4,3)/7
console.log(result)


//==
if(5=='5'){
    console.log('i dont chck the type')
}

if(5==='5') //it wont enter to if
{
    console.log('i dont chck the type')
}


//array methods
let colors = ["res","black","orange","pink"]
colors.forEach((product,index)=>{console.log(`At index ${index} is the color ${product}`)})

colors.forEach((product,index,ar)=>{ar[index]=`At index ${index} is the color ${item}`})

console.log(colors)


let age = [3,5,89,78,45,27,14]
const filterList = age.filter(item => items<18)

let ar = ["tiger",89,"lion",90]
const filterList = ar.filter(item => isNaN(item))

const filterList = ar.filter(item => parseInt(item)!=item)

const newColor = colors.map(item => {return item})
console.log(newColor)
const filterList = colors.filter(item => item!=="black")
console.log(filterList)
