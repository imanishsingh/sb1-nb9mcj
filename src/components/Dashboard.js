export function createDashboard() {
  return `
    <div class="dashboard">
      <div class="stats-container">
        <div class="neu-stat">
          <span class="stat-value">205</span>
          <span class="stat-label">Users</span>
        </div>
        <div class="neu-stat">
          <span class="stat-value">3</span>
          <span class="stat-label">Campaigns</span>
        </div>
        <div class="neu-stat">
          <span class="stat-value">98%</span>
          <span class="stat-label">Success Rate</span>
        </div>
      </div>
      <div class="campaigns-list">
        <div class="neu-campaign">
          <h3>Global Channel</h3>
          <div class="campaign-details">
            <span class="date">12 Dec, 23 - 02:30 pm</span>
            <span class="status ongoing">Ongoing</span>
          </div>
        </div>
      </div>
    </div>
  `;
}