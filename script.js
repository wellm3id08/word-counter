const textEl = document.getElementById('text');
const wordsEl = document.getElementById('words');
const charactersEl = document.getElementById('characters');
const readingTimeEl = document.getElementById('reading-time');

// Most adults read about 200 words per minute.
const WORDS_PER_MINUTE = 200;

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
}

textEl.addEventListener('input', update);

update();
