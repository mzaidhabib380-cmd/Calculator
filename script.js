var one=document.getElementById('one')
var calculator=document.getElementById('calculator')
function zaid(event) {
       calculator.innerText += event
       one.value= eval( calculator.innerText)
}









































