var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.subtract = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.divide = function (num1, num2) {
        if (num2 != 0) {
            return num1 / num2;
        }
        else {
            throw new Error("Division by zero is not allowed.");
        }
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.subtract(10, 3));
console.log(calc.multiply(2, 3));
console.log(calc.divide(2, 1));
