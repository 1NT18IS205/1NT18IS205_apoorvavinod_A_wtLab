let a="apple"

let p= new Promise(function(resolve,react){
    if(a=="apple")
    {
        resolve('Succes')
    }
    else{
        react('Failure')
    }
})

console.log(p)
p.then((message)=>{
    console.log(message + ' then is executed')
}).then((msg)=>{
    console.log('multiple then functions can be executed')
})

.catch((result)=>{
    console.log(result + ' catch is executed')
})

.catch((result)=>{
    console.log(reslut = ' catch is executed')
})