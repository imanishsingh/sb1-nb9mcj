export function createSidebar(activePage = 'dashboard') {
  const menuItems = [
    { id: 'dashboard', icon: 'ph-house', label: 'Dashboard' },
    { id: 'campaigns', icon: 'ph-broadcast', label: 'Campaigns' },
    { id: 'creator', icon: 'ph-pencil', label: 'Creator Studio' },
    { id: 'bots', icon: 'ph-robot', label: 'Bots Studio' },
    { id: 'billing', icon: 'ph-credit-card', label: 'Billing' },
    { id: 'api', icon: 'ph-code', label: 'API' },
    { id: 'package', icon: 'ph-package', label: 'Package' },
    { id: 'settings', icon: 'ph-gear', label: 'Settings' }
  ];

  return `
    <aside class="sidebar">
      <div class="logo-container">
        <img src="/logo.svg" alt="Senderly" class="logo" />
        <h1>Senderly</h1>
      </div>
      <nav class="sidebar-nav">
        ${menuItems.map(item => `
          <a href="#${item.id}" class="nav-item ${activePage === item.id ? 'active' : ''}">
            <i class="${item.icon}"></i>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </nav>
      <button class="neu-button logout-button">
        <i class="ph-sign-out"></i>
        <span>Logout</span>
      </button>
    </aside>
  `;
}