export function createButton(text, type = 'primary') {
  return `
    <button class="neu-button ${type}-button">
      ${text}
    </button>
  `;
}