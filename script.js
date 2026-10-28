const textEl = document.getElementById('text');
const wordsEl = document.getElementById('words');
const charactersEl = document.getElementById('characters');
const readingTimeEl = document.getElementById('reading-time');
const clearButton = document.getElementById('clear');

// Most adults read about 200 words per minute.
const WORDS_PER_MINUTE = 200;
const STORAGE_KEY = 'word-counter-text';

function countWords(text) {
  const trimmed = text.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
}

function update() {
  const text = textEl.value;
  const words = countWords(text);
  wordsEl.textContent = words;
  charactersEl.textContent = text.length;
  const minutes = words === 0 ? 0 : Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  readingTimeEl.textContent = `${minutes} min`;
  save(text);
}

// Storage can be unavailable (private windows, blocked cookies); the counter
// still works, it just won't remember the text.
function save(text) {
  try {
    localStorage.setItem(STORAGE_KEY, text);
  } catch {
    // ignore
  }
}

function load() {
  try {
    return localStorage.getItem(STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

textEl.addEventListener('input', update);
clearButton.addEventListener('click', () => {
  textEl.value = '';
  update();
  textEl.focus();
});

textEl.value = load();
update();
