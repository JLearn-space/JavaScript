// Урок 2. Переменные и типы данных

// 1. Объявление переменных
let age = 25;
const PI = 3.14159;
var old = 'старый стиль';

console.log('--- 1. Переменные ---');
console.log('let age =', age);
console.log('const PI =', PI);
console.log('var old =', old);

age = 26;            // let можно изменить
console.log('age после изменения =', age);
// PI = 3.14;        // Ошибка! const менять нельзя

// 2. Примитивные типы и typeof
console.log('--- 2. Типы данных ---');
let name = 'Анна';
let count = 42;
let isAdult = true;
let city = null;
let notDefined;

console.log('typeof name:', typeof name);          // 'string'
console.log('typeof count:', typeof count);        // 'number'
console.log('typeof isAdult:', typeof isAdult);    // 'boolean'
console.log('typeof city:', typeof city);          // 'object' (историческая ошибка)
console.log('typeof notDefined:', typeof notDefined); // 'undefined'

// 3. Шаблонные строки
console.log('--- 3. Шаблонные строки ---');
let greeting = `Привет, ${name}! Тебе ${age} лет.`;
console.log(greeting);

// 4. Преобразование типов
console.log('--- 4. Преобразование типов ---');
console.log("String(42):", String(42));          // '42'
console.log("Number('42'):", Number('42'));      // 42
console.log("parseInt('42px'):", parseInt('42px')); // 42
console.log("'5' + 3:", '5' + 3);                // '53' (неявное)
console.log("'5' - 3:", '5' - 3);                // 2 (неявное)

// 5. Вывод на страницу
const output = document.getElementById('output');
output.textContent =
  'age = ' + age + '\n' +
  'PI = ' + PI + '\n' +
  'typeof name: ' + typeof name + '\n' +
  'typeof null: ' + typeof null + '\n' +
  'greeting: ' + greeting + '\n' +
  "'5' + 3 = " + ('5' + 3) + ' (строка)' + '\n' +
  "'5' - 3 = " + ('5' - 3) + ' (число)';