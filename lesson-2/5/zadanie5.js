'use strict';

/**
 * Данная функция складывает параметры.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/**
 * Данная функция из параметра а вычитает параметр b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Данная ункция умножает параметры.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Данная функция делит параметр а на параметр b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}

/**
* Функция выполняет математические операции с заданными числами
* @param { number } arg1
* @param { number } arg2
* @param { string } operation "+", "-", "*", "/".
* @returns { number }
*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
    }
}

console.log(mathOperation(4, 8, "+"));
console.log(mathOperation(4, 8, "-"));
console.log(mathOperation(4, 8, "*"));
console.log(mathOperation(4, 8, "/"));