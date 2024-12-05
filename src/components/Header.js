export function createHeader(userName = 'Manish') {
  return `
    <header class="main-header">
      <div class="welcome-text">
        <h1>Welcome <span class="highlight">${userName}</span></h1>
        <p>We hope you're having a good day! ❤️</p>
      </div>
      <div class="header-actions">
        <button class="neu-button icon-button">
          <i class="ph-gear"></i>
        </button>
        <button class="neu-button icon-button">
          <i class="ph-bell"></i>
        </button>
        <div class="user-profile">
          <img src="/avatar.jpg" alt="${userName}" class="avatar" />
        </div>
      </div>
    </header>
  `;
}