const inputElement = document.getElementById("input");
const outputelement=document.getElementById("output");


inputElement.addEventListener('keyup', function() {
    const inputValue = inputElement.value;
    outputelement.innerText = `You typed: ${inputValue}`;
});