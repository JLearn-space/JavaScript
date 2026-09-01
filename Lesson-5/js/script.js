// Урок 5. Условные конструкции

// 1. if...else if...else — проверка возраста
const ageBtn = document.getElementById('age-btn');
ageBtn.addEventListener('click', () => {
  const age = Number(document.getElementById('age-input').value);
  const result = document.getElementById('age-result');

  if (age >= 18 && age < 65) {
    result.className = 'result ok';
    result.textContent = 'Взрослый: можно голосовать и водить машину.';
  } else if (age >= 65) {
    result.className = 'result warn';
    result.textContent = 'Пожилой: приятного отдыха, вы всё заслужили!';
  } else if (age > 0) {
    result.className = 'result warn';
    result.textContent = 'Ребёнок/подросток: подрасти ещё немного.';
  } else {
    result.className = 'result err';
    result.textContent = 'Введите корректный возраст!';
  }
});

// 2. Валидация формы — && и длина пароля
const formBtn = document.getElementById('form-btn');
formBtn.addEventListener('click', () => {
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;
  const result = document.getElementById('form-result');

  if (email.includes('@') && password.length >= 6) {
    result.className = 'result ok';
    result.textContent = 'Регистрация успешна!';
  } else if (!email.includes('@')) {
    result.className = 'result err';
    result.textContent = 'Проверьте email — в нём должна быть собачка @.';
  } else {
    result.className = 'result warn';
    result.textContent = 'Пароль слишком короткий — нужно минимум 6 символов.';
  }
});

// 3. switch...case — день недели
const dayBtn = document.getElementById('day-btn');
dayBtn.addEventListener('click', () => {
  const day = Number(document.getElementById('day-input').value);
  const result = document.getElementById('day-result');
  let name;

  switch (day) {
    case 1: name = 'Понедельник'; break;
    case 2: name = 'Вторник'; break;
    case 3: name = 'Среда'; break;
    case 4: name = 'Четверг'; break;
    case 5: name = 'Пятница'; break;
    case 6: name = 'Суббота'; break;
    case 7: name = 'Воскресенье'; break;
    default: name = null;
  }

  result.className = 'result ' + (name ? 'ok' : 'err');
  result.textContent = name ? 'Это ' + name + '.' : 'Введите число от 1 до 7.';
});