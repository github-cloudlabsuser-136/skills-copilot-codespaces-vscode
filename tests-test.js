// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const Calculator = require('./Calculator'); // Assuming your calculator code is in Calculator.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add method should correctly add numbers', () => {
        calculator.add(5);
        expect(calculator.result).toBe(5);
        calculator.add(3);
        expect(calculator.result).toBe(8);
    });

    test('subtract method should correctly subtract numbers', () => {
        calculator.add(5); // Start from 5
        calculator.subtract(2);
        expect(calculator.result).toBe(3);
    });

    test('multiply method should correctly multiply numbers', () => {
        calculator.add(2); // Start from 2
        calculator.multiply(3);
        expect(calculator.result).toBe(6);
    });

    test('divide method should correctly divide numbers', () => {
        calculator.add(8); // Start from 8
        calculator.divide(4);
        expect(calculator.result).toBe(2);
    });

    test('divide method should not allow division by zero', () => {
        calculator.add(8); // Start from 8
        console.error = jest.fn(); // Mock console.error
        calculator.divide(0);
        expect(console.error).toHaveBeenCalledWith("Error: Division by zero is not allowed.");
    });
});