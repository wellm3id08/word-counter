const textEl = document.getElementById('text');
const wordsEl = document.getElementById('words');
const charactersEl = document.getElementById('characters');

function countWords(text) {
  const trimmed = text.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
}

function update() {
  const text = textEl.value;
  wordsEl.textContent = countWords(text);
  charactersEl.textContent = text.length;
}

textEl.addEventListener('input', update);

update();
