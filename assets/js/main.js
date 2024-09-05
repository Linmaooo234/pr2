"use strict";

// задание 1

let name = "Джон";
let admin = (`${name}`);
console.log (`Его зовут ${admin}!`);

// Задание 2 

let nameCity = prompt("Какое название у города?");
let naselenie = prompt("Какое население у города?");
let yearofOsnovanie = Number(prompt("Какой год основания города?"));
let age = Date.now() - yearofOsnovanie;
console.log (`Название вашего города ${nameCity}, население у города ${naselenie}, сколько прошло с основания ${age}`);

// Задание 3
let r = Number(prompt("Пожалуйста введите радиус"));
let area = Math.PI * Math.pow(r, 2);
console.log(`Площадь круга с радиусом ${r} равняется ${area}`);

// Задание 4

const num1 = parseInt(prompt('Введите первое число'));
const num2 = parseInt(prompt('Введите второе число'));
const sum = num1 + num2;
const minus = num1 - num2;
const delit = num1 % num2;
const umnozhit = num1 * num2;
console.log (`Сумма чисел ${sum}, вычитание чисел ${minus}, деление чисел ${delit}, умножение чисел ${delit}`);