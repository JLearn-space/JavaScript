// Урок 7. Функции

// 1. Три способа создания функции
console.log('--- 1. Способы создания ---');

// Function Declaration
function sayHello() {
  console.log('  Function Declaration: Привет, мир!');
}
sayHello();

// Function Expression
const sayGoodbye = function () {
  console.log('  Function Expression: Пока!');
};
sayGoodbye();

// Arrow function
const greet = () => {
  console.log('  Arrow function: Привет!');
};
greet();

// 2. return и параметры по умолчанию
console.log('--- 2. return и параметры по умолчанию ---');
function multiply(a, b = 2) {
  return a * b;
}
console.log('  multiply(5, 3) =', multiply(5, 3)); // 15
console.log('  multiply(5) =', multiply(5));       // 10 (b = 2)

// 3. Замыкание — счётчик
console.log('--- 3. Замыкание ---');
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log('  counter():', counter()); // 1
console.log('  counter():', counter()); // 2
console.log('  counter():', counter()); // 3

// 4. Callback — функция как аргумент
console.log('--- 4. Callback ---');
function greetUser(name) {
  console.log('  Привет, ' + name + '!');
}
function processUser(name, callback) {
  if (name.length > 0) {
    callback(name);
  }
}
processUser('Алекс', greetUser);

// Интерактивный счётчик на странице
const countDisplay = document.getElementById('counter');
const counterBtn = document.getElementById('counter-btn');
let clicks = 0;
counterBtn.addEventListener('click', () => {
  clicks++;
  countDisplay.textContent = clicks;
});

document.getElementById('output').textContent =
  'multiply(5, 3) = ' + multiply(5, 3) + '\n' +
  'multiply(5) = ' + multiply(5) + ' (параметр по умолчанию)\n' +
  'counter(): первый вызов = ' + createCounter()();