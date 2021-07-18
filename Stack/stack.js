let elements=[];
var length=3
let top=0
function Push(e){
    if(top+1==elements.length)
    console.log("overflow")
    else{
        console.log("before push: "+elements)
        elements.push(e)
        top++
        console.log("after push:" +elements)
    }
}
function Pop(){
    if(top==0)
    console.log("underflow")
    else{console.log("before pop: "+elements)
top--
elements.pop()
console.log("after pop:"+ elements)}
}
Push(1)
Push(2)
Push(3)
Pop()
Pop()
Pop()
Pop()