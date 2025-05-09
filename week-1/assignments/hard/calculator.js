/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and 
        parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, 
        you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/
class Calculator {
  constructor(result = 0) {
    this.result = result;
  }
  add(value) {
    this.result += value;
  }
  subtract(value) {
    this.result -= value;
  }
  mulitply(value) {
    this.result *= value;
  }
  divide(value) {
    if (value === 0) {
      console.log("Error: Cannot divide by 0");
      return;
    }
    this.result /= value;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }

  calculate(expression) {
    // remove extra spaces
    const cleaned = expression.replace(/\s+/g, " ");

    // if (!/^[\d+\-*/().]+$/.test(cleaned)) {
    //   console.error("Invalid characters in expression.");
    // }
    try {
      // Safely evaluate using Function constructor
      const evaluated = new Function(`return ${cleaned}`)();
      if (typeof evaluated !== "number" || isNaN(evaluated)) {
        console.error("Invalid expression.");
      }
      this.result = evaluated;
    } catch (err) {
      console.error("Failed to evaluate expression: " + err.message);
    }
  }
}

const calc = new Calculator();
// calc.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
calc.calculate("5 + abc");
console.log(calc.getResult());
