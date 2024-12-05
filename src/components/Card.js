export function createCard(title, content, icon) {
  return `
    <div class="neu-card">
      <div class="card-icon">${icon}</div>
      <h3 class="card-title">${title}</h3>
      <p class="card-content">${content}</p>
    </div>
  `;
}