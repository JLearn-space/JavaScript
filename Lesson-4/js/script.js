// Урок 4. Объекты

// 1. Создание объекта
const user = {
  name: 'Алексей',
  age: 25,
  city: 'Москва',
};

console.log('--- 1. Объект user ---');
console.log(user);

// 2. Доступ к свойствам
console.log('--- 2. Доступ к свойствам ---');
console.log('Точечная нотация user.name:', user.name);
console.log("Скобочная нотация user['age']:", user['age']);

// 3. Изменение / добавление / удаление
console.log('--- 3. Изменение свойств ---');
user.age = 26;              // изменить
user.email = 'alex@mail.ru'; // добавить
delete user.city;           // удалить
console.log(user);

// 4. Методы объекта и this
console.log('--- 4. Методы объекта ---');
const person = {
  name: 'Алиса',
  age: 30,
  greet() {
    console.log('Привет, меня зовут ' + this.name + ', мне ' + this.age + ' лет.');
  },
};
person.greet();

// 5. Перебор свойств через for...in
console.log('--- 5. Перебор for...in ---');
for (const key in person) {
  console.log('  ' + key + ': ' + person[key]);
}

// 6. Объекты передаются по ссылке
console.log('--- 6. Передача по ссылке ---');
const a = { value: 10 };
const b = a;       // b ссылается на тот же объект
b.value = 20;
console.log('a.value =', a.value);   // 20 (изменилось!)
const copy = { ...a }; // поверхностная копия (spread)
copy.value = 99;
console.log('a.value после копии =', a.value, ', copy.value =', copy.value);

// 7. Вывод на страницу
document.getElementById('card-name').textContent = 'Имя: ' + user.name;
document.getElementById('card-age').textContent = 'Возраст: ' + user.age;
document.getElementById('card-city').textContent = 'Город: ' + (user.city || 'не указан');

const output = document.getElementById('output');
output.textContent =
  'user.name = ' + user.name + '\n' +
  'user.age = ' + user.age + '\n' +
  'user.email = ' + user.email + '\n' +
  'a.value (по ссылке) = ' + a.value + '\n' +
  'copy.value (spread-копия) = ' + copy.value;