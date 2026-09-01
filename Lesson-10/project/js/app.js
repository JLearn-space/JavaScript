// Итоговый проект — логика менеджера задач

// 1. Состояние приложения
const state = {
  tasks: [],
  filter: 'all',
  sortByDate: false,
};

// 2. Кэширование DOM-элементов
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const deadlineInput = document.getElementById('deadline-input');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortBtn = document.getElementById('sort-btn');
const statTotal = document.getElementById('stat-total');
const statActive = document.getElementById('stat-active');
const statCompleted = document.getElementById('stat-completed');
const clearBtn = document.getElementById('clear-btn');

const STORAGE_KEY = 'todoTasks';

// 3. Сохранение и загрузка из localStorage
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
}

function loadFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  state.tasks = raw ? JSON.parse(raw) : [];
}

// 4. Генерация уникального id
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// 5. CRUD-операции
function createTask(text, deadline) {
  return {
    id: generateId(),
    text,
    completed: false,
    createdAt: new Date().toISOString(),
    deadline: deadline || null,
  };
}

function addTask(text, deadline) {
  state.tasks.push(createTask(text, deadline));
  saveToStorage();
  render();
}

function deleteTask(id) {
  state.tasks = state.tasks.filter((task) => task.id !== id);
  saveToStorage();
  render();
}

function toggleTask(id) {
  const task = state.tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveToStorage();
    render();
  }
}

function editTask(id, newText) {
  const task = state.tasks.find((t) => t.id === id);
  if (task && newText.trim()) {
    task.text = newText.trim();
    saveToStorage();
    render();
  }
}

// 6. Фильтрация и сортировка
function getVisibleTasks() {
  let tasks = state.tasks;

  if (state.filter === 'active') {
    tasks = tasks.filter((t) => !t.completed);
  } else if (state.filter === 'completed') {
    tasks = tasks.filter((t) => t.completed);
  }

  if (state.sortByDate) {
    tasks = [...tasks].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }

  return tasks;
}

// 7. Форматирование дедлайна
function formatDeadline(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T23:59:59');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));

  const label = date.toLocaleDateString('ru-RU');
  if (diffDays < 0) return label + ' (просрочено!)';
  if (diffDays === 0) return label + ' (сегодня)';
  if (diffDays === 1) return label + ' (завтра)';
  return label;
}

// 8. Рендеринг одного элемента
function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = 'task-item' + (task.completed ? ' completed' : '');
  li.dataset.id = task.id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', () => toggleTask(task.id));

  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = task.text;

  const deadlineSpan = document.createElement('span');
  deadlineSpan.className = 'task-deadline';
  deadlineSpan.textContent = formatDeadline(task.deadline);

  const editBtn = document.createElement('button');
  editBtn.className = 'action-btn edit';
  editBtn.textContent = 'Изменить';
  editBtn.addEventListener('click', () => startEditing(li, task));

  const delBtn = document.createElement('button');
  delBtn.className = 'action-btn delete';
  delBtn.textContent = 'Удалить';
  delBtn.addEventListener('click', () => deleteTask(task.id));

  li.append(checkbox, textSpan, deadlineSpan, editBtn, delBtn);
  return li;
}

// 9. Инлайн-редактирование
function startEditing(li, task) {
  const textSpan = li.querySelector('.task-text');
  const editInput = document.createElement('input');
  editInput.className = 'edit-input';
  editInput.value = task.text;

  textSpan.replaceWith(editInput);
  editInput.focus();

  function finish() {
    editTask(task.id, editInput.value);
  }

  editInput.addEventListener('blur', finish);
  editInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      editInput.blur();
    } else if (event.key === 'Escape') {
      render();
    }
  });
}

// 10. Рендеринг списка и статистики
function renderTasks() {
  taskList.innerHTML = '';
  const tasks = getVisibleTasks();

  if (tasks.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty';
    empty.textContent = 'Задач нет. Добавь первую!';
    taskList.appendChild(empty);
    return;
  }

  for (const task of tasks) {
    taskList.appendChild(createTaskElement(task));
  }
}

function renderStats() {
  const completed = state.tasks.filter((t) => t.completed).length;
  statTotal.textContent = state.tasks.length;
  statActive.textContent = state.tasks.length - completed;
  statCompleted.textContent = completed;
}

function render() {
  renderTasks();
  renderStats();
}

// 11. Инициализация
taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  addTask(text, deadlineInput.value);
  taskInput.value = '';
  deadlineInput.value = '';
  taskInput.focus();
});

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.filter = btn.dataset.filter;
    renderTasks();
  });
});

sortBtn.addEventListener('click', () => {
  state.sortByDate = !state.sortByDate;
  sortBtn.textContent = state.sortByDate
    ? 'Сортировка: по дате ✓'
    : 'Сортировка: по дате';
  renderTasks();
});

clearBtn.addEventListener('click', () => {
  state.tasks = state.tasks.filter((t) => !t.completed);
  saveToStorage();
  render();
});

document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  render();
});