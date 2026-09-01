// Урок 9. DOM — работа с элементами

// 1. Изменение textContent и classList
const demoText = document.getElementById('demo-text');

document.getElementById('text-btn').addEventListener('click', () => {
  demoText.textContent = 'Текст был изменён через textContent!';
});

document.getElementById('class-btn').addEventListener('click', () => {
  demoText.classList.toggle('highlight');
});

// 2. Создание и добавление элементов
const itemInput = document.getElementById('item-input');
const list = document.getElementById('list');

function createItem(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Удалить';
  li.appendChild(delBtn);

  return li;
}

document.getElementById('add-btn').addEventListener('click', () => {
  const text = itemInput.value.trim();
  if (!text) return;
  list.appendChild(createItem(text));
  itemInput.value = '';
});

// 3. Делегирование событий: один обработчик на родителе
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
  }
});

// 4. Форма и preventDefault
const form = document.getElementById('my-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();  // отключаем перезагрузку страницы
  const value = form.field.value.trim();
  const out = document.getElementById('form-output');

  if (value) {
    out.textContent = 'Форма отправлена: «' + value + '»';
  } else {
    out.textContent = 'Поле пустое!';
  }
});

// 5. Событие DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM полностью загружен и готов к работе.');
});