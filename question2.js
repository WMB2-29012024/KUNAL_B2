const inputElement1=document.getElementById("input1")
const inputElement2=document.getElementById("input2")
const form=document.getElementById("form")
const pElem=document.getElementById("output")

form.addEventListener("submit" , function(event){
    event.preventDefault();
    const sum  = Number(input1.value ) + Number(input2.value)
    
    pElem.innerText = sum
})