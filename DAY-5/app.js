const firstinput = document.getElementById("firstInput")
const secondinput = document.getElementById("secondInput")
const result = document.getElementById("result")


function calculator(Opreator) {
    const num1 = parseInt(firstinput.value)
    const num2 = parseInt(secondinput.value)

    if (isNaN( num1) || isNaN (num2) ) {
        result.innerText = `Plese Enter Valid Number`
    }
    switch (Opreator) {
        case "+":
            result.innerText = `Sum :  ${num1 + num2}`
            break;

        case "-":
            result.innerText = `Sub :  ${num1 - num2}`    
            break;
         
        case "*":
             result.innerText = `Mul :  ${num1 * num2}`
             break;

        case "/":
            if (num2 === 0 ) {
                result.innerText = `Cannot Dived by Zero`
            } else {
                 result.innerText = ` Div :  ${num1 / num2}`
            }
            break;
        default:
             result.innerText = `Invalid  Opreator`
            break;
    }
}