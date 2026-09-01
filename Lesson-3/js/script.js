// Урок 3. Операторы и массивы

// 1. Арифметические операторы
console.log('--- 1. Арифметические операторы ---');
console.log('10 + 2 =', 10 + 2);
console.log('10 - 2 =', 10 - 2);
console.log('10 * 2 =', 10 * 2);
console.log('10 / 2 =', 10 / 2);
console.log('10 % 3 =', 10 % 3, '(остаток от деления)');
console.log('2 ** 3 =', 2 ** 3, '(степень)');

// 2. Сравнения и логика
console.log('--- 2. Сравнения и логика ---');
console.log('5 > 3:', 5 > 3);
console.log("5 === '5':", 5 === '5', '(строгое равенство)');
console.log("5 == '5':", 5 == '5', '(нестрогое)');
console.log('(5 > 3) && (2 < 4):', (5 > 3) && (2 < 4));  // true
console.log('(5 > 3) || (1 > 2):', (5 > 3) || (1 > 2));  // true
console.log('!(5 > 3):', !(5 > 3));                      // false

// 3. Массивы: создание и доступ
console.log('--- 3. Создание массива ---');
let fruits = ['яблоко', 'банан', 'апельсин'];
let mixed = [1, 'текст', true, null];
console.log('fruits:', fruits);
console.log('fruits[0]:', fruits[0]);
console.log('fruits[2]:', fruits[2]);
console.log('fruits.length:', fruits.length);
console.log('fruits.at(-1):', fruits.at(-1));

// 4. Методы массивов
console.log('--- 4. Методы массивов ---');
let stack = [1, 2, 3];
stack.push(4);
console.log('push(4):', stack);
stack.pop();
console.log('pop():', stack);
stack.unshift(0);
console.log('unshift(0):', stack);
stack.shift();
console.log('shift():', stack);

let nums = [10, 20, 30, 40, 50];
console.log('slice(1,4):', nums.slice(1, 4), '(оригинал:', nums, ')');
console.log("join(' - '):", nums.join(' - '));
console.log('indexOf(30):', nums.indexOf(30));
console.log('includes(99):', nums.includes(99));

// 5. Перебор массива
console.log('--- 5. Перебор for...of ---');
for (const fruit of fruits) {
  console.log('  Фрукт:', fruit);
}

// 6. Вывод на страницу
const output = document.getElementById('output');
let text = '10 % 3 = ' + (10 % 3) + '\n';
text += "5 === '5' → " + (5 === '5') + '\n';
text += "fruits[0] = " + fruits[0] + '\n';
text += 'fruits.length = ' + fruits.length + '\n';
text += 'nums.slice(1,4) = [' + nums.slice(1, 4) + ']\n';
text += "stack.join(' - ') = " + stack.join(' - ');
output.textContent = text;