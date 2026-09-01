// Урок 6. Циклы

// 1. Цикл for — сумма от 1 до 10
console.log('--- 1. Цикл for: сумма 1..10 ---');
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log('Сумма =', sum);   // 55

// 2. while и do...while
console.log('--- 2. while и do...while ---');
let count = 1;
while (count <= 3) {
  console.log('  while: count =', count);
  count++;
}

let i = 1;
do {
  console.log('  do...while: i =', i);
  i++;
} while (i <= 3);

// 3. break и continue
console.log('--- 3. break и continue ---');
for (let n = 0; n < 10; n++) {
  if (n === 5) break;         // останавливаем на 5
  console.log('  break: n =', n);
}

for (let n = 0; n < 10; n++) {
  if (n % 2 === 0) continue;  // пропускаем чётные
  console.log('  continue: n =', n);
}

// 4. Перебор массива
console.log('--- 4. Перебор массива ---');
const fruits = ['яблоко', 'банан', 'апельсин'];
for (const fruit of fruits) {
  console.log('  Фрукт:', fruit);
}

// 5. Вывести чётные числа от 0 до 20 (практическая задача)
console.log('--- 5. Чётные числа 0..20 ---');
const evens = [];
for (let n = 0; n <= 20; n++) {
  if (n % 2 === 0) evens.push(n);
}
console.log('Чётные:', evens.join(', '));

// 6. Вывод на страницу
document.getElementById('output').textContent =
  'Сумма 1..10 = ' + sum + '\n' +
  'Метод перебора: for...of\n' +
  'Чётные числа 0..20:\n  ' + evens.join(' ');