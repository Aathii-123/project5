let add=function(x,y){
    return x+y
}
console.log(add)
  let result=add(1,2) 
console.log(result)
  function outer(){
let i=100
console.log("inside function outer.....")
console.log(i)
function inner(){
    let k=50
    console.log("inside function inner.....")
    console.log(k)
}
inner()
}
outer()