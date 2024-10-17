class Calculator{

    add(num1:number, num2:number)
    {
        return num1 + num2;
    }

    subtract(num1:number, num2:number)
    {
        return num1 - num2;
    }

    multiply(num1:number, num2:number)
    {
        return num1 * num2;
    }
    divide(num1:number, num2:number)
    {
        if(num2!=0)
        {
            return num1 / num2;
        }
        else
        {
            throw new Error("Division by zero is not allowed.");
        }
    }


}

let calc = new Calculator();

console.log(calc.add(2,3));
console.log(calc.subtract(10,3));
console.log(calc.multiply(2,3));
console.log(calc.divide(2,1));