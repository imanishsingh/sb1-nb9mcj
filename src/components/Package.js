export function createPackageSection() {
  return `
    <div class="package-container">
      <div class="search-section neu-card">
        <input type="text" class="neu-input" placeholder="Search Package for Education, Aviation, e-commerce" />
        <div class="volume-control">
          <label>RCS Monthly Volume</label>
          <div class="neu-range-container">
            <button class="neu-button icon-button"><i class="ph-minus"></i></button>
            <input type="range" min="0" max="2000000" value="1000000" class="neu-range" />
            <button class="neu-button icon-button"><i class="ph-plus"></i></button>
          </div>
        </div>
        <button class="neu-button primary">Advance Filters</button>
      </div>

      <div class="plans-grid">
        ${createPlanCard('Rich Card TEXT', 'Plan A', ['Simple Message', 'OTP', 'Notification', 'Transaction'])}
        ${createPlanCard('Rich Card Media', 'Plan B', ['Simple Message', 'OTP', 'Notification', 'Transaction'])}
        ${createPlanCard('Rich Card Carousel', 'Plan C', ['Simple Message', 'OTP', 'Notification'])}
        ${createPlanCard('Rich Card Video', 'Plan D', ['Simple Message', 'OTP', 'Notification'])}
      </div>
    </div>
  `;
}

function createPlanCard(title, planName, features) {
  return `
    <div class="plan-card neu-card">
      <h3>${title}</h3>
      <span class="plan-name">${planName}</span>
      <div class="features-list">
        ${features.map(feature => `<div class="feature-item"><i class="ph-check"></i>${feature}</div>`).join('')}
      </div>
      <div class="card-actions">
        <button class="neu-button">Start Campaign</button>
        <button class="neu-button secondary">Purchase Credits</button>
      </div>
    </div>
  `;
}