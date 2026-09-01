// Урок 8. Дата и время

// 1. Создание объекта Date
console.log('--- 1. Создание Date ---');
const now = new Date();
console.log('  now:', now);

// 2. Получение компонентов даты
console.log('--- 2. Компоненты даты ---');
console.log('  Год (getFullYear):', now.getFullYear());
console.log('  Месяц (getMonth, с 0!):', now.getMonth());        // 0 = январь
console.log('  День (getDate):', now.getDate());
console.log('  День недели (getDay, 0 = вс):', now.getDay());
console.log('  Часы (getHours):', now.getHours());
console.log('  Минуты (getMinutes):', now.getMinutes());
console.log('  Секунды (getSeconds):', now.getSeconds());

// 3. Форматирование
console.log('--- 3. Форматирование ---');
console.log('  toDateString():', now.toDateString());
console.log('  toTimeString():', now.toTimeString());
console.log('  toISOString():', now.toISOString());
console.log('  toLocaleString():', now.toLocaleString('ru-RU'));

// 4. Математика с датами: сколько дней до Нового года
console.log('--- 4. Разница между датами ---');
const newYear = new Date(now.getFullYear() + 1, 0, 1);
const diffMs = newYear - now;
const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
console.log('  До Нового года:', diffDays, 'дней');

// 5. setTimeout — через 3 секунды
console.log('--- 5. setInterval / setTimeout ---');
setTimeout(() => {
  console.log('  setTimeout: прошло 3 секунды!');
}, 3000);

// 6. Живые часы на странице
const clockEl = document.getElementById('clock');
const dateEl = document.getElementById('date-info');

function updateClock() {
  const t = new Date();
  const hh = String(t.getHours()).padStart(2, '0');
  const mm = String(t.getMinutes()).padStart(2, '0');
  const ss = String(t.getSeconds()).padStart(2, '0');
  clockEl.textContent = hh + ':' + mm + ':' + ss;
  dateEl.textContent = t.toLocaleDateString('ru-RU', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

updateClock();
setInterval(updateClock, 1000);

// 7. Вывод на страницу
const output = document.getElementById('output');
output.textContent =
  'Сегодня: ' + now.toLocaleString('ru-RU') + '\n' +
  'До Нового года: ' + diffDays + ' дн.\n' +
  'getMonth() (считает с 0): ' + now.getMonth();