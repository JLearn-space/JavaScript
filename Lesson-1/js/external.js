// Внешний скрипт — третий способ подключения JavaScript
// Подключается через атрибут src в теге <script>

const externalBtn = document.getElementById('external-btn');
externalBtn.addEventListener('click', () => {
  alert('Привет из внешнего файла js/external.js!');
  console.log('Внешний: файл js/external.js');
});

console.log('Внешний скрипт загружен успешно.');